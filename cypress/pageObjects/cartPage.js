class CartPage {
    validateAddtoCart(){
        cy.get('#add-to-cart-sauce-labs-backpack').should('be.visible').click();
        cy.get('#remove-sauce-labs-backpack').should('be.visible').should('contain', 'Remove');
    }

    validateHasOneProduct(){
        cy.get('.shopping_cart_badge').should('be.visible').should('contain', '1');
    }

    validateAddDetailProductCart(){
        cy.get('#add-to-cart').should('be.visible').click();
        cy.get('#remove').should('be.visible').should('contain', 'Remove');
    }

    validateCartButton(){
        cy.get(`.shopping_cart_link`).should('be.visible').click();

        cy.fixture('../fixtures/data.json').then((cartData) => {
            cy.url().should('include', `${cartData.cartPage}`);
        });
    }

    validateProductQuantity(){
        cy.get('.cart_item')
            .its('length')
            .should('be.greaterThan', 0);
    }

    validateSpesificProductCart(){
        cy.fixture('../fixtures/data.json').then((productData) => {
            cy.get(`.${productData.elementProduct.name}`)
                .should('be.visible')
                .and('not.be.empty')
                .and('contain', productData.spesificProduct.name); 

            cy.get(`.${productData.elementProduct.description}`)
                .should('be.visible')
                .and('not.be.empty')
                .and('contain', productData.spesificProduct.description);

            cy.get(`.${productData.elementProduct.price}`)
                .should('be.visible')
                .and('not.be.empty')
                .and('contain', productData.spesificProduct.price);
        });
    }
}

export default CartPage;