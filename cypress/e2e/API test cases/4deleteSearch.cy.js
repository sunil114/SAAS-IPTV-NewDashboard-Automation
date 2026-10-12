const API_CONFIG = require('../../support/apiConfig');

describe('Delete Search API', () => {

    let accessToken;

    before(() => {
        cy.login().then((token) => {
            accessToken = token;
        });
    });

    it('should delete recent search successfully', () => {

        cy.request({
            method: 'POST',
            url: `/api/${API_CONFIG.appName}/${API_CONFIG.version}/search/delete`,
            headers: {
                Authorization: `Bearer ${accessToken}`
            },
            form: true,
            body: {
                search: 'nepali'
            },
            failOnStatusCode: false
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