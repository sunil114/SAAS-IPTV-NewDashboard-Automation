const API_CONFIG = require('../../support/apiConfig');

describe('Home API', () => {

    let accessToken;

    before(() => {
        cy.login().then((token) => {
            accessToken = token;
        });
    });


    it('should get Home data successfully', () => {


        cy.request({
            method: 'GET',
            url: `/api/${API_CONFIG.appName}/${API_CONFIG.version}/home`,
            headers: {
                Authorization: `Bearer ${accessToken}`
            }
        }).then((response) => {

            // Status code validation
            expect(response.status).to.eq(200);

            // Response body validation
            expect(response.body).to.exist;

            // Optional: print response
            cy.log(JSON.stringify(response.body));

        });

    });

});