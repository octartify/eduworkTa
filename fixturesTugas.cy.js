// describe('Try to login', () => {
//     it("Visit the website", () => {
//         cy.visit('http://zero.webappsecurity.com/login.html')
//         cy.url().should('include', 'login.html')
//         cy.fixture("user").then(user => {
//             const username = user.username
//             const password = user.password

//             cy.get('#user_login').clear()
//             cy.get('#user_login').type(username)

//             cy.get('input[id="user_password"]').clear()
//             cy.get('input[id="user_password"]').type(password)
            
//             cy.get('input[name="submit"]').click()
    
//         })
//     });
// });

describe('Try to login', () => {
    it("Visit the website", () => {
        cy.visit('http://zero.webappsecurity.com/login.html')
        cy.url().should('include', 'login.html')
        cy.fixture("user").then(user => {
            const username = user.username
            const password = user.password
            cy.login(username, password)
        
            // cy.get('#account_summary_tab > a').contains('Account Summary')
            
            cy.visit('http://zero.webappsecurity.com/bank/account-activity.html#ui-tabs-2')
            cy.url().should('include', 'account-activity.html#ui-tabs-2')

            cy.get('.ui-tabs-nav > :nth-child(2) > a').contains('Find Transactions').click()
            cy.get('.ui-tabs-selected > a').contains('Find Transactions')

                cy.fixture("transaction").then(_transaction => {
                const description = _transaction.description

                    cy.get('#aa_description').type(description)

                        cy.get('.btn').contains('Find').click()

            });
        });
    });
});