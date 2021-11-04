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
        cy.wait(60000);
        cy.get('[data-testid=selection-button').click();
    })
})

