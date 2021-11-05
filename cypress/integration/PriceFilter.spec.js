beforeEach(() => {
    cy.visit('/');
})

describe("Test App", () => {
    it('launches', () => {
        //
    })

    it('PriceFiltest', () => {
        cy.get('[data-cy = one_dollar]',{ timeout: 30000 }).click();
        let count = 0
        cy.get('div').then((val)=>{
            if(val.find('[data-testid=selection-button]').length > 0 ){
                cy.get('[data-testid=selection-button]')
                    .then(len => {
                        count = Cypress.$(len).length;
                        for(let i = 0; i < count; i ++){
                            cy.get('[data-testid=selection-button]').eq(i).click();
                            cy.get('[data-cy=price]').should('contain', '$10 and under');
                            cy.get('[data-testid="back button"]').click();
                        }
                });
            }else{
                cy.get('[data-cy=no_restaurants_text]').should('contain','There are no restaurants which match your search criteria.');
            }
        })
        
        cy.get('[data-cy = two_dollar]').click();
        cy.get('div').then((val)=>{
            if(val.find('[data-testid=selection-button]').length > 0 ){
                cy.get('[data-testid=selection-button]')
                    .then(len => {
                        count = Cypress.$(len).length;
                        for(let i = 0; i < count; i ++){
                            cy.get('[data-testid=selection-button]').eq(i).click();
                            cy.get('[data-cy=price]').should('contain', 'Between $10-$25');
                            cy.get('[data-testid="back button"]').click();
                        }
                });
            }else{
                cy.get('[data-cy=no_restaurants_text]').should('contain','There are no restaurants which match your search criteria.');
            }
        })

        cy.get('[data-cy = three_dollar]').click();
        cy.get('div').then((val)=>{
            if(val.find('[data-testid=selection-button]').length > 0 ){
                cy.get('[data-testid=selection-button]')
                    .then(len => {
                        count = Cypress.$(len).length;
                        for(let i = 0; i < count; i ++){
                            cy.get('[data-testid=selection-button]').eq(i).click();
                            cy.get('[data-cy=price]').should('contain', 'Between $25-$45');
                            cy.get('[data-testid="back button"]').click();
                        }
                });
            }else{
                cy.get('[data-cy=no_restaurants_text]').should('contain','There are no restaurants which match your search criteria.');
            }
        })

        cy.get('[data-cy = four_dollar]').click();
        cy.get('div').then((val)=>{
            if(val.find('[data-testid=selection-button]').length > 0 ){
                cy.get('[data-testid=selection-button]')
                    .then(len => {
                        count = Cypress.$(len).length;
                        for(let i = 0; i < count; i ++){
                            cy.get('[data-testid=selection-button]').eq(i).click();
                            cy.get('[data-cy=price]').should('contain', 'Between $25-$45');
                            cy.get('[data-testid="back button"]').click();
                        }
                });
            }else{
                cy.get('[data-cy=no_restaurants_text]').should('contain','There are no restaurants which match your search criteria.');
            }
        })
            
    })
})