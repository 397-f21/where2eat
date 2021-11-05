beforeEach(() => {
    cy.visit('/');
    cy.get('[data-testid=selection-button', { timeout: 30000 }).first().click();
})

describe('Testing functionality on Restaurant page', () => {
    it('The "view on yelp" button works', () => {
        cy.get('[data-testid=yelpLink]')
            .should('have.attr', 'href')
            .then((href) => {
                expect(href).to.have.string("https://www.yelp.com");
            });

    })
})