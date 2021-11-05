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
    it('interaction test', () => {
        cy.get('[data-testid=selection-button', { timeout: 30000 }).first().click();
        cy.get('[data-testid="back button"]');
    })
})

