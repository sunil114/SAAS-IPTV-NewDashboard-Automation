class loginPage {

    // =========================
    // Locators
    // =========================

    elements = {

        // Logo / Page
        logo: () => cy.get('img[alt="Admin"]'),

        welcomeText: () => cy.contains('h1', 'Welcome Back'),

        // Login Form
        loginForm: () => cy.get('form[action*="/admin/login"]'),

        // Email
        email: () => cy.get('#email'),

        emailLabel: () => cy.get('label[for="email"]'),

        // Password
        password: () => cy.get('#password'),

        passwordLabel: () => cy.get('label[for="password"]'),

        // Password Visibility
        passwordToggleBtn: () =>
            cy.get('#password').parent().find('button[type="button"]'),

        eyeOpen: () => cy.get('#eye-open'),

        eyeClosed: () => cy.get('#eye-closed'),

        // Remember Me
        rememberMe: () =>
            cy.get('input[name="remember"]'),

        rememberMeLabel: () =>
            cy.contains('label', 'Remember me'),

        // Login Button
        signInBtn: () =>
            cy.contains('button[type="submit"]', 'Sign In'),

        // Error / Validation
        errorMessage: () =>
            cy.get('.alert-danger, .invalid-feedback, .text-danger'),

        // Footer
        copyrightText: () =>
            cy.contains('© 2026 eGovMedia Admin. All rights reserved.')
    }


    // =========================
    // Page Methods
    // =========================

    verifyLoginPageLoaded() {

        this.elements.loginForm()
            .should('be.visible')
    }

    verifyLogoVisible() {

        this.elements.logo()
            .should('be.visible')
    }

    verifyWelcomeText() {

        this.elements.welcomeText()
            .should('be.visible')
            .and('contain', 'Welcome Back')
    }


    // =========================
    // Email Methods
    // =========================

    enterEmail(email) {

        this.elements.email()
            .clear()
            .type(email)
    }

    clearEmail() {

        this.elements.email()
            .clear()
    }

    verifyEmailVisible() {

        this.elements.email()
            .should('be.visible')
    }

    verifyEmailRequired() {

        this.elements.email()
            .should('have.attr', 'required')
    }

    verifyEmailType() {

        this.elements.email()
            .should('have.attr', 'type', 'email')
    }

    verifyEmailValue(email) {

        this.elements.email()
            .should('have.value', email)
    }


    // =========================
    // Password Methods
    // =========================

    enterPassword(password) {

        this.elements.password()
            .clear()
            .type(password)
    }

    clearPassword() {

        this.elements.password()
            .clear()
    }

    verifyPasswordVisible() {

        this.elements.password()
            .should('be.visible')
    }

    verifyPasswordRequired() {

        this.elements.password()
            .should('have.attr', 'required')
    }

    verifyPasswordMasked() {

        this.elements.password()
            .should('have.attr', 'type', 'password')
    }

    verifyPasswordTypeText() {

        this.elements.password()
            .should('have.attr', 'type', 'text')
    }

    verifyPasswordValue(password) {

        this.elements.password()
            .should('have.value', password)
    }


    // =========================
    // Password Visibility Methods
    // =========================

    clickPasswordToggle() {

        this.elements.passwordToggleBtn()
            .click()
    }

    verifyPasswordEyeOpen() {

        this.elements.eyeOpen()
            .should('be.visible')
    }

    verifyPasswordEyeClosed() {

        this.elements.eyeClosed()
            .should('be.visible')
    }

    verifyPasswordEyeClosedHidden() {

        this.elements.eyeClosed()
            .should('have.class', 'hidden')
    }


    // =========================
    // Remember Me Methods
    // =========================

    checkRememberMe() {

        this.elements.rememberMe()
            .check()
    }

    uncheckRememberMe() {

        this.elements.rememberMe()
            .uncheck()
    }

    verifyRememberMeChecked() {

        this.elements.rememberMe()
            .should('be.checked')
    }

    verifyRememberMeUnchecked() {

        this.elements.rememberMe()
            .should('not.be.checked')
    }


    // =========================
    // Login Methods
    // =========================

    clickSignInButton() {

        this.elements.signInBtn()
            .click()
    }

    login(email, password) {

        this.enterEmail(email)

        this.enterPassword(password)

        this.clickSignInButton()
    }

    loginWithRememberMe(email, password) {

        this.enterEmail(email)

        this.enterPassword(password)

        this.checkRememberMe()

        this.clickSignInButton()
    }


    // =========================
    // Validation Methods
    // =========================

    verifyErrorMessage(message) {

        this.elements.errorMessage()
            .should('be.visible')
            .and('contain', message)
    }

    verifyFooterText() {

        this.elements.copyrightText()
            .should('be.visible')
    }
}

export default new loginPage()