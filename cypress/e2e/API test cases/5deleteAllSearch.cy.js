const API_CONFIG = require('../../support/apiConfig');

describe('Delete All Search API', () => {

    let accessToken;

    before(() => {
        cy.login().then((token) => {
            accessToken = token;
        });
    });

    it('should delete all search history successfully', () => {

        cy.request({
            method: 'POST',
            url: `/api/${API_CONFIG.appName}/${API_CONFIG.version}/search/delete-all`,
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