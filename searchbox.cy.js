//latihan

// describe('Searchbox Test', function() {
//     before(() => {
//         cy.visit('http://zero.webappsecurity.com/index.html')
//     });
//     it('Should type into searchbox and submit', () => {
//         cy.get('#searchTerm').type('some text {enter}')
//     });
//     it('Should show search result page', () => {
//         cy.visit('http://zero.webappsecurity.com/search.html?searchTerm=some+text+')
//         cy.get('h2').should('contain.text', 'Search Results:')
//     });
// })

//Tugas

describe('Searchbox Test', function() {
    before(() => {
        cy.visit('http://zero.webappsecurity.com/')
    });
    it('Should type into searchbox and submit', () => {
        cy.get('#searchTerm').type('online {enter}')
    });
    it('Should load new url and assert the result', () => {
        cy.visit('http://zero.webappsecurity.com/search.html?searchTerm=online+')
        cy.get('h2').should('have.text', 'Search Results:')
        cy.get(':nth-child(4) > :nth-child(1) > a').should('have.text', 'Zero - Free Access to Online Banking')
        cy.get(':nth-child(2) > a').should('have.text', 'Zero - Online Statements')
    });

})