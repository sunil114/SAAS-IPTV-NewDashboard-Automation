const API_CONFIG = require('../../support/apiConfig');


describe('WorldTV Login API', () => {

    it('should login successfully and validate response schema', () => {

        cy.env(['email', 'password']).then((env) => {

            cy.request({
                method: 'POST',
                url: `/api/${API_CONFIG.appName}/${API_CONFIG.version}/login`,

                body: {
                    username: env.email,
                    password: env.password
                }

            }).then((response) => {

                // Status code
                expect(response.status).to.eq(200);

                // Content type
                expect(response.headers['content-type'])
                    .to.include('application/json');

                // Response body
                expect(response.body).to.exist;

                //cy.log(JSON.stringify(response.body));

            });

        });

    });

});