const API_CONFIG = require('../../support/apiConfig');

describe('Forgot Password API', () => {

    it('should submit forgot password request successfully', () => {

        cy.request({
            method: 'POST',
            url: `/api/${API_CONFIG.appName}/${API_CONFIG.version}/password/forgot`,
            headers: {
                'Content-Type': 'multipart/form-data'
            },
            form: true,
            body: {
                username: 'sunil.ipu1@gmail.com'
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