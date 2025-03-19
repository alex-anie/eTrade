/// <reference types="cypress" />

describe('Loader Component Test', () => {
    it('should show the loader while fetching data', () => {
      cy.intercept('GET', 'https://fakestoreapi.com/products', (req) => {
        req.on('response', (res) => {
          res.setDelay(2000); // Simulate delay for loader
        });
      }).as('getProducts');
      
      cy.visit('/products');
      
      // Loader should be visible while data is being fetched
      cy.get('[data-testid=loader]').should('be.visible');
  
      cy.wait('@getProducts');
  
      // Once data is fetched, the loader should disappear
      cy.get('[data-testid=loader]').should('not.exist');
    });
  });
  