beforeEach(() => {
    cy.visit('/');
})

describe('Testing that Categories of selected Restaurant are correct', () => {
    it('Clicking a Category takes you to a Restaurant of that Category', () => {
        cy.get('[data-testid=selection-button', { timeout: 30000 }).as('selectionButtons');
        cy.get('@selectionButtons').each(($el, i, $list) => {
            const text = $el.text();
            cy.get('@selectionButtons').eq(i).click();
            cy.get('[data-testid="category"]')
                .invoke('text')
                .then((text1) => {
                    expect(text1).to.equal(text);
                })
            cy.get('[data-testid="back button"]').click();
        })
    })
})