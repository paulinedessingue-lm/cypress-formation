export class CustomerAccount{

    login(email, password){
        cy.contains('Me connecter').click();
        cy.get('[id="email--998"]').type(email);
        cy.contains('Continuer').click({ force: true });
        cy.get('[id="password--996"]').type(password);
        cy.get('button').contains('Me connecter').click({ force: true });
    }

    verifyIsLoggedIn() {}

}

export const customerAccount = new CustomerAccount();