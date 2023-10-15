/// <reference types="cypress" />



before(() => {
    cy.fixture("user").then(user => {
        const username = user.username
        const password = user.password

    cy.visit('http://zero.webappsecurity.com/index.html')
    cy.url().should('include', 'index.html')
    cy.get('#signin_button').click()
    cy.get('#user_login').type('username')
    cy.get('#user_password').type('password')
    cy.get('input[name="submit"]').click()
    cy.get('#account_summary_tab > a').should('be.visible')
    })
  })

  describe('Log out', () => {
    it('should log out the user', () => {
        cy.get(':nth-child(3) > .dropdown-toggle').click()
        cy.get('#logout_link').click()
        cy.get('#homeMenu > div').should('be.visible')
    })
  })