beforeEach(() => {
    cy.visit('/');
})

describe("Test App", () => {
    it('launches', () => {
        //
    })
    it('content test', () => {
        cy.get('[data-testid=banner]').contains('Find Your Meal!');
    })
    it.skip('interaction test', () => {
        cy.get('[data-testid=selection-button', { timeout: 10000 }).first().click();
        cy.get('[data-testid="back button"]');
    })
    it('yelp works', () => {
        cy.get('[data-testid=selection-button', { timeout: 10000 }).first().click();
        cy.get('[data-testid=yelpLink]')
            .should('have.attr', 'href')
            .then((href) => {
                expect(href).to.have.string("https://www.yelp.com");
            });

    })
})

