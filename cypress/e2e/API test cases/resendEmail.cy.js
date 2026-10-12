const API_CONFIG = require('../../support/apiConfig');

describe('Resend Email API', () => {

    it('should resend email successfully', () => {

        cy.request({
            method: 'POST',
            url: `/api/${API_CONFIG.appName}/${API_CONFIG.version}/email/resend`,
            form: true,
            body: {
                username: 'sunil.ipu1@gmail.com'
            },
            failOnStatusCode: false
        }).then((response) => {

            // Status code validation
            expect(response.status).to.eq(201);

            // Response body validation
            expect(response.body).to.exist;

            // Print response
            cy.log(JSON.stringify(response.body));

        });

    });

});