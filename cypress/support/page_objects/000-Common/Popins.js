export class Popins{

    acceptsAllCookies(){
        cy.contains('#component-privacyModal .mc-button__label', 'Tout accepter').click({force: true});
    }

}

export const popins = new Popins();