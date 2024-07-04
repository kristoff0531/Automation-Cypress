describe('CSS Locators', () => {
  it('Searching Products',()=>{
    cy.visit('http://www.automationpractice.pl/index.php')
    cy.get('#search_query_top').type('T-Shirt')
    cy.wait(1000)
    cy.get("[name='submit_search']").click()
    cy.wait(3000)
    cy.get('.lighter').contains("T-Shirt")
    
  })

  //Test case to fail
  it('Should fail for search results', ()=>{
    cy.visit('http://www.automationpractice.pl/index.php')
    cy.get('#search_query_top').type('T-Shirt')
    cy.wait(1000)
    cy.get("[name='submit_search']").click()
    cy.wait(3000)
    cy.get('.lighter').contains("Jeans")

  })

  it('Should find and click on links ',()=>{
    cy.visit('http://www.automationpractice.pl/index.php')
    cy.wait(2000)
    // cy.get("[title='Dresses']").click()
    cy.get("a[title='Dresses']").first().click({ force: true }); // two elements were caught so using the first with the help of first()
    cy.wait(2000)
    // cy.get("[src='http://www.automationpractice.pl/modules/homeslider/images/sample-1.jpg']").click()
    cy.get("[title='Blog']").click()
    cy.wait(2000)
    
    

  })

  it('Should check women section',()=>{
    cy.visit('http://www.automationpractice.pl/index.php')
    cy.wait(2000)
    cy.get("a[title='Women']").click()
    cy.wait(2000)

  })

  it('click on images',()=>{
    cy.visit('http://www.automationpractice.pl/index.php')
    cy.wait(2000)
    cy.get("img[alt='sample-2']").click({force:true})
    // cy.get("#homeslider > :nth-child(2) > a > img").click({waitForAnimations: false}) //Needs attention
    cy.wait(3000)


  })

  it('Should open cart ',()=>{
    cy.visit('http://www.automationpractice.pl/index.php')
    cy.wait(2000)
    cy.get("a[title='View my shopping cart']").click()
    cy.wait(3000)
  })

  it('Go to Signin ', ()=>{
    cy.visit('http://www.automationpractice.pl/index.php')
    cy.wait(2000)
    cy.get("a[title='Log in to your customer account']").click()
    cy.wait(2000)
    cy.get('#email').type('test123@gmail.com')
    cy.wait(2000)
    cy.get('#passwd').type('test123')
    cy.wait(2000)
    cy.get('#SubmitLogin').click()
  })

  it('Should create an account',()=>{
    cy.visit('http://www.automationpractice.pl/index.php')
    cy.wait(2000)
    // cy.get("a[title='Create an account']").click()
    cy.get("a[title='Log in to your customer account']").click()
    cy.wait(2000)
    cy.get('#email_create').type('test123@gmail.com')
    cy.wait(2000)
    cy.get('#SubmitCreate').click()
    // cy.get('#create_account_error')
    // .should('be.visible')
    // .and('contains','An account using this email address has already been registered. Please enter a valid password or request a new one.')
    // cy.xpath("//div[@id='create_account_error']")
    // .should('contains','An account using this email address has already been registered. Please enter a valid password or request a new one.')
  })

  it('validating test requirements',()=>{
    cy.visit('http://www.automationpractice.pl/index.php')
    cy.url().should("include","automationpractice")
    .should('eq','http://www.automationpractice.pl/index.php')
    .should("not.contain","bungeeJumping")
    
  })

  it.only('explicit assertions',()=>{
    cy.visit('http://www.automationpractice.pl/index.php')
    // cy.get("a[title='View my shopping cart']").should('be.visible')
    cy.get("a[title='Log in to your customer account']").click()
    cy.wait(2000)
    cy.get('#email').type('kristoffroy@gmail.com')
    cy.wait(2000)
    cy.get('#passwd').type('Kunal123')
    cy.wait(2000)
    cy.get('#SubmitLogin').click()
    cy.wait(2000)
    let name="Kunal Roy"
    cy.get("a[title='View my customer account'] span").then((x)=>{
      let newName=x.text()
      //BDD Approach
      expect(newName).to.equal(name)
      cy.wait(3000)
      expect(newName).to.not.equal("lomor")

      //TDD Approach
      assert.equal(newName,name)

    })
    cy.get(2000)
    cy.get("li > .btn > span").click()
    cy.wait(2000)
    cy.get("a[title='Log me out']").click()
  })

})

