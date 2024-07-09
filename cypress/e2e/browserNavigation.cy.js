describe('Should navigate through web page ', () => {
  it('should go back and forward', ()=>{
    cy.visit("https://demo-opencart.com/")
    cy.title().should('eq',"Your Store")
    cy.wait(1000)
    cy.get("li:nth-child(7) a:nth-child(1)").click()
    cy.wait(1000)
    cy.get("div[id='content'] h2").should('have.text',"Cameras")
    cy.wait(1000)
    cy.go('back') // Back to home page
    cy.title().should('eq',"Your Store")
    cy.wait(1000)
    cy.go('forward') // Camera page
    cy.wait(1000)
    cy.get("div[id='content'] h2").should('have.text',"Cameras")
    cy.wait(2000)
    cy.go(-1)  // Home page
    cy.title().should('eq',"Your Store")

    cy.go(1)  // Camera page 
    cy.get("div[id='content'] h2").should('have.text',"Cameras")

    cy.wait(2000)
    cy.reload()  //Manual reload

  })
})
