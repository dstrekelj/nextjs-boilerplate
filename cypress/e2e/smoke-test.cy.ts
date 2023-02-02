import { before, cy, expect, it } from 'local-cypress';

before(() => {
  /**
   * @todo Invoke application logic used to sign the user out of the application.
   */

  cy.intercept('GET', /.*\/api\/shows\?.*/, {
    fixture: 'search-shows.json',
  }).as('mockedSearchShowsRequest');
});

it('Displays search results', () => {
  cy.visit('/');

  cy.get('input').type('girls');
  cy.get('button').click();

  cy.get('[id="139"]')
    .should('be.visible')
    .within(() => {
      cy.get('a')
        .should($a => {
          expect($a).to.have.attr('target', '_blank');
        })
        .end();
    });
});
