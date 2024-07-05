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
  
    // it.only('shoould select dropdowns from number',() => {
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
      cy.wait(2000)
      cy.get('#place_order').click()
    })
  })
  