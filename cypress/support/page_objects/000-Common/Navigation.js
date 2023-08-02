export class Navigation {

    goToHomepage(){
        cy.visit("");
    }

}

export const navigation = new Navigation();