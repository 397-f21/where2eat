beforeEach(() => {
    cy.visit('/');
})

describe("Testing Filters", () => {
    it('Testing half mile Distance Filter', () => {
        cy.get('[data-cy = half_mile]',{ timeout: 30000 }).click();
        let count = 0
        cy.get('div').then((val)=>{
            if(val.find('[data-testid=selection-button]').length > 0 ){
                cy.get('[data-testid=selection-button]')
                    .then(len => {
                        count = Cypress.$(len).length;
                        for(let i = 0; i < count; i ++){
                            cy.get('[data-testid=selection-button]').eq(i).click();
                            cy.get('[data-cy=distance]').invoke('text')
                                .then(text => 
                                    { const num = parseFloat(text.replace("miles away").trim());
                                    expect(num).to.be.at.most(0.5);
                                    })
                            cy.get('[data-testid="back button"]').click();
                        }
                });
            }else{
                cy.get('[data-cy=no_restaurants_text]').should('contain','There are no restaurants which match your search criteria.');
            }
        })
    })
        
        it('Testing one mile Distance Filter', () => {
            cy.get('[data-cy = one_mile]',{ timeout: 60000 }).click();
            let count = 0
            cy.wait(10000)
            cy.get('div').then((val)=>{
                if(val.find('[data-testid=selection-button]', {timeout: 30000}).length > 0 ){
                    cy.get('[data-testid=selection-button]')
                        .then(len => {
                            count = Cypress.$(len).length;
                            for(let i = 0; i < count; i ++){
                                cy.get('[data-testid=selection-button]').eq(i).click();
                                cy.get('[data-cy=distance]').invoke('text')
                                    .then(text => 
                                        { const num = parseFloat(text.replace("miles away").trim());
                                        expect(num).to.be.at.most(1);
                                        })
                                cy.get('[data-testid="back button"]').click();
                            }
                    });
                }else{
                    cy.get('[data-cy=no_restaurants_text]').should('contain','There are no restaurants which match your search criteria.');
                }
            })
        })

        it('Testing three mile Distance Filter', () => {
            cy.get('[data-cy = three_mile]',{ timeout: 60000 }).click();
            let count = 0
            cy.wait(10000)
            cy.get('div').then((val)=>{
                if(val.find('[data-testid=selection-button]', {timeout: 30000}).length > 0 ){
                    cy.get('[data-testid=selection-button]')
                        .then(len => {
                            count = Cypress.$(len).length;
                            for(let i = 0; i < count; i ++){
                                cy.get('[data-testid=selection-button]').eq(i).click();
                                cy.get('[data-cy=distance]').invoke('text')
                                    .then(text => 
                                        { const num = parseFloat(text.replace("miles away").trim());
                                        expect(num).to.be.at.most(3);
                                        })
                                cy.get('[data-testid="back button"]').click();
                            }
                    });
                }else{
                    cy.get('[data-cy=no_restaurants_text]').should('contain','There are no restaurants which match your search criteria.');
                }
            })
        })
   
})