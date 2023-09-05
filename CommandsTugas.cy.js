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