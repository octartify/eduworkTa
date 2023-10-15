/// <reference types="cypress" />



before(() => {
    cy.visit('http://zero.webappsecurity.com/index.html')
    cy.url().should('include', 'index.html')
    })
    
    describe('Log out', () => {
        
        it('should display online banking content', () => {
        cy.contains('Online Banking').click()
        cy.url().should('include', 'online-banking.html')
        cy.get('h1').should('be.visible')
        })
        
        it('should display online banking content', () => {
        cy.visit('http://zero.webappsecurity.com/online-banking.html')
        cy.contains('Sign in').click()
        cy.url().should('include', 'login.html')
        cy.get('h3').should('be.visible')
        })
    })
