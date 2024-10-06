require('@cypress/xpath');
import "../support/commands";
import LoginPage from '../pageObjects/loginPage';
import ProductPage from '../pageObjects/productsPage';
const loginPage = new LoginPage();
const productPage = new ProductPage();

describe('Display product page', () => {
  beforeEach(() => {
      loginPage.visit();
      loginPage.fillUsername();
      loginPage.fillPassword();
      loginPage.submit();
      loginPage.verifyLoginSuccess(); 
  });

  it('should show list products ', () => {
    productPage.validateProdutsPage();
    productPage.validateElementProducts();
    productPage.validateFilterProduct();
  });


  it('should show detail spesific product', () => {
    productPage.validateSpesificProductButton();
    productPage.validateSpesificProduct();
  });
});
