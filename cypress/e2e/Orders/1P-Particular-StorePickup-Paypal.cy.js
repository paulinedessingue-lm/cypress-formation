/// <reference types="cypress" />

import { config } from "cypress/types/bluebird";
import { navigation } from "../../support/page_objects/000-Common/Navigation";
import { popins } from "../../support/page_objects/000-Common/Popins";
import { customerAccount } from "../../support/page_objects/010-Customer-Relationship/CustomerAccount";

describe('Order', () => {
    
    it('1P - Particular customer - Store Pickup - Paypal', () => {
        navigation.goToHomepage();
        cy.wait(2000);
        popins.acceptsAllCookies();
        cy.wait(2000);

        cy.fixture('Customers/LM-Customer1').then(customer => {
            customerAccount.login(customer.email, customer.password);
        });

    });

});