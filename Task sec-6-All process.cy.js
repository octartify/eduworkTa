/// <reference types="cypress" />

describe('process test', () => {
    before(() => {
         cy.fixture("user").then(user => {
            const username = user.username
            const password = user.password

        cy.visit('http://zero.webappsecurity.com/index.html')
        cy.get('#signin_button').click()
        cy.get('#login_form').should('be.visible')
    });
            cy.get('#user_login').clear()
            cy.get('#user_login').type('username')
            cy.get('#user_password').clear()
            cy.get('#user_password').type('password')
            cy.get('input[name="submit"]').click()

            cy.get('h2').should('contain.text', 'Cash Accounts')
        });

        it('Should open Account activity', () => {
            cy.get('#account_activity_tab').click()

            cy.get('#account_activity_tab > a').should('contain.text', 'Account Activity')

            cy.get('.ui-tabs-selected > a').click()

            cy.get('#aa_accountId').select(['Loan']).should('have.value', '4')

         });
         
        it("Search box test", () => {
            cy.visit('http://zero.webappsecurity.com/login.html')

            cy.get('#user_login').clear()
            cy.get('#user_login').type('username')
            cy.get('#user_password').clear()
            cy.get('#user_password').type('password')
            cy.get('input[name="submit"]').click()

            cy.get('#searchTerm').type('online {enter}')

            cy.get('h2').should('have.text', 'Search Results:')
            cy.get(':nth-child(4) > :nth-child(1) > a').should('have.text', 'Zero - Free Access to Online Banking')
            cy.get(':nth-child(4) > :nth-child(2) > a').should('have.text', 'Zero - Online Statements')
            
        });

});