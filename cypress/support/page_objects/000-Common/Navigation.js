export class Navigation {

    goToHomepage(){
        cy.visit("https://www.leroymerlin.fr");
    }

}

export const navigation = new Navigation();