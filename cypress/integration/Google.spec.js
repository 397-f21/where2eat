beforeEach(() => {
    cy.visit('/');
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