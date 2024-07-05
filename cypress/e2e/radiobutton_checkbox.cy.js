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
    cy.get("li[class='breadcrumb-item']").click() //Home 
  })


})
describe.only('Automating dropdowns', () => {
  it('should select dropdown', () => {
    cy.visit("https://practice.expandtesting.com/")
    cy.get('a[href="/dropdown"]').click()
    cy.get("#dropdown").select('Option 1')
    cy.get("#dropdown").should('have.value','1')
    // cy.get("select[@id='dropdown'][1]").select()
    cy.wait(2000)
    cy.get("#dropdown").select('Option 2')
    cy.get('#dropdown').should('have.value','2')
  })

  // it('shoould select dropdowns from number',() => {
  //   cy.visit("https://practice.expandtesting.com/")
  //   cy.get('a[href="/dropdown"]').click()
  //   cy.get('#elementsPerPageSelect').select('50')
  //   cy.get('#elementsPerPageSelect').should('have.value','50')
  // })

  it('should select dropdowns',() => {
    cy.visit('https://www.dummyticket.com/')
    cy.get('#menu-item-574 > .nav-item-child').click()
    cy.wait(2000)
    cy.get('#select2-reasondummy-container').click()
    cy.get('.select2-search__field').type('Visa application').type('{enter}')
    cy.wait(2000)
    cy.get('#select2-billing_country-container').click()
    cy.get('.select2-search__field').type('India').type('{enter}')
    // cy.get('').type('Visa application').type('{enter}')
    // cy.get('#select2-reasondummy-container').should('have.text','Visa application')

    cy.get('#select2-billing_state-container').click()
    cy.get('.select2-search__field').type('West Bengal').type('{enter}')
  })
})
