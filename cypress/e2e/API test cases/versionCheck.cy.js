const API_CONFIG = require('../../support/apiConfig');

describe('Version Check API', () => {

    it('should check application version successfully', () => {

        cy.request({
            method: 'GET',
            url: `/api/${API_CONFIG.appName}/${API_CONFIG.version}/version/check`,
            qs: {
                'package name': API_CONFIG.packageName,
                'version code': API_CONFIG.versionCode
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