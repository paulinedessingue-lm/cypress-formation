/// <reference types="cypress" />

import { popins } from "../support/page_objects/000-Common/Popins";
import { customerAccount } from "../support/page_objects/010-Customer-Relationship/CustomerAccount";

describe('Suite de tests', () => {
  
  beforeEach(() => {
    // code
  });
  
  it('Premier test', () => {
    cy.visit("https://www.leroymerlin.fr");
    cy.wait(2000);
    popins.acceptsAllCookies();
    
    // cy.find --> va chercher un élément descendant

    cy.get('a[data-cerberus="CPT_accountheader"]')
      .find('span')
      .should('contain', 'Me connecter')
      .and('have.class', 'customerheadermodule__label');

    // CHECKBOX et RADIO 
    // cy.get('.radioButtonClass').check({force: true}).should('be.checked');

    // SELECT
    // yields <option value="456">apples</option>
    // cy.get('select').select('apples').should('have.value', '456');

    cy.get('a[data-cerberus="CPT_accountheader"]').invoke('text').then( text => {
      expect(text).to.contain('Me connecter');
    });

    // DOC Assertions 
    // https://docs.cypress.io/guides/references/assertions

    customerAccount.login("email@gmail.com","password123");
    customerAccount.verifyIsLoggedIn();
  });

})