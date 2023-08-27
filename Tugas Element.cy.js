// describe('Browser Action', () => {
//     it("Should load books website", () => {
//         cy.visit('https://books.toscrape.com/index.html', { timeout: 5000 })
//         cy.url().should('include', 'index.html')
//     })

//     it("Should click on Travel category", () => {
//         cy.visit('https://books.toscrape.com/index.html', { timeout: 5000 })
//         cy.url().should('include', 'index.html')
//         cy.get('a').contains('Travel').click()
//         cy.get('h1').contains('Travel')
        
//     });
// });
describe('Checked the box', () => {
    it("Visit the website", () => {
        cy.visit('http://zero.webappsecurity.com/login.html')
        cy.url().should('include', 'login.html')
        cy.get('input[name="user_remember_me"]').check()
    });
})