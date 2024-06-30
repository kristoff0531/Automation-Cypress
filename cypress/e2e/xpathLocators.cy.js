describe('Practice x-path',()=>{
    it('Practice x-path',()=>{
        cy.visit('http://www.automationpractice.pl/index.php')
        cy.get("a[title='Women']").click()
        cy.wait(2000)
        cy.xpath("//ul[@class='product_list grid row']/li").should('have.length',7)
    })

    it('Chained X-Path',()=>{
        cy.visit('http://www.automationpractice.pl/index.php')
        cy.get("a[title='Women']").click()
        cy.wait(2000)
        cy.xpath("//ul[@class='product_list grid row']").xpath('./li').should('have.length',7)
        cy.wait(2000)
        cy.get(".bullet > :nth-child(1) > a").click()
        cy.wait(2000)
        cy.get(".toggle-footer > :nth-child(1) > a").click()
        cy.wait(2000)
        cy.get('.dismissButton').click();
        cy.wait(2000);
        for(let i=1;i<4;i++)
        {
            cy.get('[aria-label="Zoom in"]').click();
        }
    })
    
   
})