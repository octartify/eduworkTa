describe('Checked the box', () => {
    it("Visit the website", () => {
        cy.visit('http://zero.webappsecurity.com/login.html')
        cy.url().should('include', 'login.html')
        cy.get('input[name="user_remember_me"]').check()
        cy.fixture("user").then(user => {
            const username = user.username
            const password = user.password
            cy.login(username, password)

        cy.visit('http://zero.webappsecurity.com/bank/pay-bills.html')
        cy.url().should('include', 'pay-bills.html')
        cy.paym()
            
        })    
    });
});

//ini custom commands.js nya kak
// Cypress.Commands.add('paym', () => {
//     cy.get('#sp_payee').select('Bank of America')
//     cy.get('#sp_account').select('1')
//     cy.get('#sp_amount').type('1000')
//     cy.get('#sp_date').type('2023-09-04')
//     cy.get('.ui-datepicker-days-cell-over > .ui-state-default').click()
//     cy.get('#sp_description').type('only saving')

//     cy.get('#pay_saved_payees').click()
// })
