describe('Capturing Screenshots and handling videos', () => {
  // it('should capture screenshot', ()=> {
  //   cy.visit('https://demo-opencart.com/')
  //   cy.wait(2000)
  //   cy.screenshot('Homepage')
  //   cy.wait(2000)
  //   cy.get("img[title='Your Store']").screenshot('MyStore')
  //   cy.wait(2000)
  //   cy.get("img[alt='iPhone 6']").click({force: true})
  //   cy.screenshot('tab')

  // })

  it('should automatically capture screenshots when failed', ()=> {
    cy.visit('https://demo-opencart.com/')
    cy.get("li:nth-child(7) a:nth-child(1)").click()
    cy.wait(1000)
    cy.get("div[id='content'] h2").should('have.text','Tablets')
  })
})
