// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('login', () => {

    cy.env(['email', 'password', 'appName']).then((env) => {

        cy.request({
            method: 'POST',
            url: `/api/${env.appName}/v1/login`,

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
            const accessToken = response.body.data.access_token;

            return accessToken;

        });

    });
})