describe('Alerts', () => {
    it('should display js alert', () => {
        cy.visit('https://the-internet.herokuapp.com/')
        cy.wait(2000)
        cy.get("a[href='/javascript_alerts']").click()
        cy.wait(3000)
        cy.get("button[onclick='jsAlert()']").click()
        cy.on('window:alert',(t)=>{
            expect(t).to.equal('I am a JS Alert')
        })

        cy.get('#result').should('have.text','You successfully clicked an alert')
    })

    it('should test js confirm - OK button ', ()=> {
        cy.visit('https://the-internet.herokuapp.com/')
        cy.get("a[href='/javascript_alerts']").click()
        cy.wait(3000)
        cy.get("button[onclick='jsConfirm()']").click()
        cy.wait(2000)
        cy.on('window:confirm',(t)=>{
            expect(t).to.equal('I am a JS Confirm')
        })
        cy.get('#result').should('have.text','You clicked: Ok')
        //cypress closes alert box automatically by clicking ok button:default


    })

    it('should test js confirm - CANCEL button', ()=> {
        cy.visit('https://the-internet.herokuapp.com/')
        cy.get("a[href='/javascript_alerts']").click()
        cy.wait(3000)
        cy.get("button[onclick='jsConfirm()']").click()
        cy.wait(2000)
        cy.on('window:confirm',(t)=>{
            expect(t).to.equal('I am a JS Confirm')
        })
        
        
        cy.on('window:confirm',()=> false) //making the alert go away by pressing cancel button
        cy.get('#result').should('have.text','You clicked: Cancel')
    })

    it('should test js prompt', ()=>{
        cy.visit('https://the-internet.herokuapp.com/')
        cy.get("a[href='/javascript_alerts']").click()
        cy.wait(3000)
        cy.get("button[onclick='jsPrompt()']").click()
        cy.wait(2000)
        cy.window().then(function(p){
            cy.stub(p,'prompt').returns("Kunal")

        })
        cy.on('window:confirm',()=> false)
        cy.get("button[onclick='jsPrompt()']").click()
        cy.get('#result').should('have.text',"You entered: Kunal")
    })

    
  
})
