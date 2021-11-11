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

describe('Test Google links on each Restaurant page', () => {
    it('Address link contains a Google Maps query link', () => {
        cy.get('[data-testid=selection-button', { timeout: 30000 }).as('selectionButtons');
        cy.get('@selectionButtons').each(($el, i, $list) => {
            cy.get('@selectionButtons').eq(i).click();
            cy.get('[data-testid=mapsLink]')
                .should('have.attr', 'href')
                .then((href) => {
                    expect(href).to.have.string("http://maps.google.com/?q=");
                });
                cy.get('[data-testid="back button"]').click();
        })
    })
})