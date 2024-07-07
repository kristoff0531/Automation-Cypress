describe('Automating Radio Buttons and Check Boxes', () => {
  it('should select a radio button for fav colour', () => {
    cy.visit("https://practice.expandtesting.com/")
    cy.wait(2000)
    // cy.get('#examples > :nth-child(3) > :nth-child(2) > .card > .card-body > .card-title > .my-link').click()
    cy.get("a[href='/radio-buttons']").click()
    cy.wait(2000)
    cy.get("#red").should('be.visible') //making sure the element is visible
    cy.get("#red").check().should('be.checked')
    cy.get("#blue").should('not.be.checked')
    cy.get("#green").should('not.be.checked')
    cy.get('#black').should('not.be.checked')

    
  })

  it('should select radio button for fav sport',()=>{
    cy.visit("https://practice.expandtesting.com/")
    cy.get("a[href='/radio-buttons']").click()
    cy.get("#basketball").check()
    cy.get("#basketball").should('be.checked')
    cy.get("#football").should('not.be.checked')
    cy.get("#tennis").should('not.be.checked')
    cy.get("li[class='breadcrumb-item']").click() //home

  })

  it('should select multiple check boxes', () => {
    cy.visit("https://practice.expandtesting.com/")
    cy.get('a[href="/checkboxes"]').click()
    cy.get('#checkbox1').check()
    cy.get('#checkbox1').should('be.checked') //should check the option
    cy.wait(3000)
    cy.get("#checkbox2").check()
    cy.get("#checkbox2").should('be.checked') 
    cy.wait(3000)
    cy.get("#checkbox1").uncheck() // should uncheck the option
    cy.get("#checkbox1").should('not.be.checked')
    cy.get("li[class='breadcrumb-item']").click() //home 


  })
  it('should check all the check boxes at once', () => {
    cy.visit("https://practice.expandtesting.com/")
    cy.get('a[href="/checkboxes"]').click()
    cy.wait(3000)
    cy.get('input.form-check-input[type="checkbox"]').check() // selecting the whole class associated with the check boxes
    cy.get('input.form-check-input[type="checkbox"]').should('be.checked')
    cy.wait(3000)
    cy.get('input.form-check-input[type="checkbox"]').uncheck() // unchecking all at once
    cy.get('input.form-check-input[type="checkbox"]').should('not.be.checked')
    cy.wait(2000)
    cy.get("li[class='breadcrumb-item']").click() //Return Home 
  })


})
