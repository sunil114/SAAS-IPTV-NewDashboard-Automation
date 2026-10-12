const API_CONFIG = require('../../support/apiConfig');

describe('Add Wishlist API', () => {

    let accessToken;

    before(() => {
        cy.login().then((token) => {
            accessToken = token;
        });
    });

    it('should add a movie to wishlist successfully', () => {

        cy.request({
            method: 'POST',
            url: `/api/${API_CONFIG.appName}/${API_CONFIG.version}/wishlists`,
            qs: {
                type: 'movie',
                product_id: 2658
            },
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