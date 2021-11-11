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

describe("Test App", () => {
    it('launches', () => {
        //
    })
    it('content test', () => {
        cy.get('[data-testid=banner]').contains('Find Your Meal!');
    })
    it('interaction test', () => {
        cy.get('[data-testid=selection-button]', { timeout: 30000 }).first().click();
        cy.get('[data-testid="back button"]');
    })
})

