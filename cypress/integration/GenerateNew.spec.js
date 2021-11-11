beforeEach(() => {
    cy.visit('/', {
        onBeforeLoad (win) {
        cy
        .stub(win.navigator.geolocation, 'getCurrentPosition')
        .callsFake((cb) => {
                return cb({
                    "coords": {
                        "latitude": 42.052441200000004,
                        "longitude": -87.6830102
                    }
                });
        });
        },
    });
})

describe('Testing functionality on Restaurant page', () => {
    it('The "generate new restaurant" button displays a different restaurant if enabled', () => {
        cy.get('[data-testid=selection-button]', { timeout: 30000 }).as('selectionButtons');
        cy.get('@selectionButtons').each(($el, i, $list) => {
            cy.get('@selectionButtons').eq(i).click();
            cy.get('[data-testid=generateNew]').then(($btn) => {
                if ($btn.is(":disabled")) {
                    return
                } else {
                    cy.get('.name').invoke("text").then(($name) => {
                        cy.wrap($btn).click();
                        cy.get('.name').invoke('text')
                            .then(($name2) =>
                                expect($name).to.not.equal($name2));
                    })
                }
            })
            cy.get('[data-testid="back button"]').click();
        })
    })
})