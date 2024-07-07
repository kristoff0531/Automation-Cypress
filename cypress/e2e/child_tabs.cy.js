describe('Child Tabs', () => {
  it('Approach-1: Removing target attribute', ()=>{
    cy.visit('https://the-internet.herokuapp.com/windows')
    cy.wait(2000)
    //From the 'Click here' we are removing its target so that the action can be performed on the same tab
    cy.get("a[href='/windows/new']").invoke('removeAttr','target').click()
    cy.wait(2000)
    cy.url().should('include',"https://the-internet.herokuapp.com/windows/new")
    cy.get('h3').should('have.contain','New Window')
    cy.wait(1000)
    cy.go('back')
  })
  it('Approach-2: Extracting the Href property', ()=>{
    cy.visit('https://the-internet.herokuapp.com/windows')
    cy.wait(1000)
    cy.get("a[href='/windows/new']").then((e)=>{
        let tab = e.prop('href') // extracting the property Href into tab 
        cy.visit(tab) //this will open the tab
    })
    cy.wait(1000)
    cy.url().should('include',"https://the-internet.herokuapp.com/windows/new")
    cy.get('h3').should('have.contain','New Window')
    cy.wait(1000)
    cy.go('back')

  })
})
