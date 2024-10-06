class LoginPage {
    visit() {
      cy.visit('/');
    }
    
    validateLoginPage(){
        cy.get('.login_logo').should('be.visible').should('contain', 'Swag Labs');
    }

    fillUsername() {
        cy.fixture('../fixtures/data.json').then((loginData) => {
            cy.get('#user-name').should('be.visible').type(loginData.accountUsername);
        });
    }
  
    fillPassword() {
        cy.fixture('../fixtures/data.json').then((loginData) => {
            cy.get('#password').should('be.visible').type(loginData.accountPw);
        });
    }
  
    submit() {
        cy.get('#login-button').should('be.visible').should('contain', 'Login').click();
    }
  
    verifyLoginSuccess() {
        cy.fixture('../fixtures/data.json').then((loginData) => {
            cy.url().should('include', loginData.productsPage);
        });
    }
  }
  
  export default LoginPage;
  