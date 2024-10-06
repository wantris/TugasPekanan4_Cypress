require('@cypress/xpath');
import "../support/commands";
import LoginPage from '../pageObjects/loginPage';
import ProductPage from '../pageObjects/productsPage';
import CartPage from '../pageObjects/cartPage';

const loginPage = new LoginPage();
const productPage = new ProductPage();
const cartPage = new CartPage();

describe('Add product to cart', () => {
    beforeEach(() => {
        loginPage.visit();
        loginPage.fillUsername();
        loginPage.fillPassword();
        loginPage.submit();
        loginPage.verifyLoginSuccess(); 
    });

    it('should add product to cart in list product page ', () => {
        productPage.validateProdutsPage();
        cartPage.validateAddtoCart();
        cartPage.validateHasOneProduct();
    });

    it('should add product to cart in detail product page', () => {
        productPage.validateSpesificProductButton();
        cartPage.validateAddDetailProductCart();
        cartPage.validateHasOneProduct();
    });
});

describe('Display product in Cart', () => {
    beforeEach(() => {
        loginPage.visit();
        loginPage.fillUsername();
        loginPage.fillPassword();
        loginPage.submit();
        loginPage.verifyLoginSuccess(); 

        cartPage.validateAddtoCart();
    });

    

    it('should show spesific product in cart', () => {
        cartPage.validateCartButton();
        cartPage.validateProductQuantity();
        cartPage.validateSpesificProductCart();
    });
});