// Hooks
// before --executes once before whole test
// after -- executes once after whole test
// beforeEach -- executes before each it block
// afterEach  -- executes after each it block


// Tags :- categorize and selectively run tests based on specific criteria. e.g--> skip,only ,etc
describe('Hooks & Tags Testing', () => {

before(()=>{
    cy.log("**** Launching ****")
})
after(()=>{
    cy.log("**** Closing ****")
})

beforeEach(()=>{
    cy.log("**** Logged In ****")
})

afterEach(()=>{
    cy.log("**** Logged Out ****")
})

 it('should search', ()=>{
    cy.log("****** Searching ******")
 })

 it('should do advance searching', ()=>{
    cy.log("**** Advance Search ****")
 })

 it('should do product listing', ()=>{
    cy.log("**** Product Listing ****")
 })
})
