describe('First test', () => {
    it('should pass', () => {
        cy.visit("http://localhost:4200/")
        cy.title().should('eq','FrontEnd')
        cy.get('#mat-input-3').type('admin')
        cy.wait(2000)
        cy.get('.signup-form > .flex > .mdc-button > .mdc-button__label').click()
        cy.wait(2000)
        cy.get('#mat-input-0').type('kunal')
        cy.get('#mat-input-1').type('kunal@gmail.com')
        cy.get(':nth-child(3) > .mat-mdc-form-field > .mat-mdc-text-field-wrapper > .mat-mdc-form-field-flex > .mat-mdc-form-field-infix').type('kunal123')
        cy.wait(2000)
        cy.get('#mat-mdc-form-field-label-4 > .label-edit').click()
    })
    
  
})
