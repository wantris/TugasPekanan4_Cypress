require('@cypress/xpath');
import "../support/commands";
import LoginPage from '../pageObjects/loginPage';
const loginPage = new LoginPage();

describe('User Login', () => {

  it('should access login page', () => {
    cy.visit('/');
    loginPage.validateLoginPage();
  });

  it('should login successfully and redirect to products page', () => {
    loginPage.visit();
    loginPage.fillUsername();
    loginPage.fillPassword();
    loginPage.submit();
    loginPage.verifyLoginSuccess();
  });
});
