const API_CONFIG = require('../../support/apiConfig');

describe('Wishlist Items API', () => {

    let accessToken;

    before(() => {
        cy.login().then((token) => {
            accessToken = token;
        });
    });

    it('should get wishlist items successfully', () => {

        cy.request({
            method: 'GET',
            url: `/api/${API_CONFIG.appName}/${API_CONFIG.version}/wishlists/items`,
            headers: {
                Authorization: `Bearer ${accessToken}`
            }
        }).then((response) => {

            // Status code validation
            expect(response.status).to.eq(200);

            // Response body validation
            expect(response.body).to.exist;

            // Print response
            cy.log(JSON.stringify(response.body));

        });

    });

});