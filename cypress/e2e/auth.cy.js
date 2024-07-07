describe('Authorization on js', () => {
  it('should authenticate', ()=>{
    cy.visit('https://the-internet.herokuapp.com/')
    cy.wait(2000)
    cy.get("a[href='/basic_auth']").click({
        auth:{username: "admin", password: "admin"}
    })
    cy.wait(2000)
    // cy.get("div[class='example'] p").should('have.text',"Congratulations! You must have the proper credentials. ")
    cy.get("div[class='example'] p").should('have.contain',"Congratulations")
  })

//   it.skip('should not authenticate', ()=>{
//     cy.visit('https://the-internet.herokuapp.com/')
//     cy.wait(2000)
//     cy.get("a[href='/basic_auth']").click()
//     cy.window().then(()=>{
//         cy.on('window:confirm',()=> false)

//     })
//     // cy.on('window:confirm',()=> false)
//     // cy.get("div[class='example'] p").should('have.text',"Congratulations! You must have the proper credentials. ")
//     cy.get("div[class='example'] p").should('have.contain',"Not authorized")
//   })
})
