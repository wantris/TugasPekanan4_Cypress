class ProductPage {
    validateProdutsPage() {
        cy.fixture('../fixtures/data.json').then((productData) => {
            cy.url().should('include', productData.productsPage);

            cy.get('.inventory_item')
                .its('length')
                .should('be.greaterThan', 0);
        });
    }

    validateElementProducts(){
        cy.fixture('../fixtures/data.json').then((productData) => {
            cy.get(`.${productData.elementProduct.image} img`)
                .should('exist')  
                .and('have.attr', 'src') 
                .and('not.be.empty'); 
            
            cy.get(`.${productData.elementProduct.name}`)
                .should('be.visible')
                .and('not.be.empty');

            cy.get(`.${productData.elementProduct.description}`)
                .should('be.visible')
                .and('not.be.empty');

            cy.get(`.${productData.elementProduct.price}`)
                .should('be.visible')
                .and('not.be.empty');
        });
    };

    validateFilterProduct(){
        cy.get('.product_sort_container').select('lohi');

        cy.get('.inventory_item_price').eq(0).invoke('text').then((firstPrice) => {
            cy.get('.inventory_item_price').eq(1).invoke('text').then((secondPrice) => {
              const firstPriceNum = parseFloat(firstPrice.replace('$', ''));
              const secondPriceNum = parseFloat(secondPrice.replace('$', ''));
              expect(firstPriceNum).to.be.lessThan(secondPriceNum);
            });
        }); 
    }

    validateSpesificProductButton(){
        const id = 4;
        cy.get(`#item_${id}_title_link`).should('be.visible').click();
        cy.url().should('include', `?id=${id}`);
    }

    validateSpesificProduct(){
        cy.fixture('../fixtures/data.json').then((productData) => {
            cy.get(`.${productData.elementDetailProduct.image}`)
                .should('exist')  
                .and('have.attr', 'src') 
                .and('not.be.empty');
            
            cy.get(`.${productData.elementDetailProduct.name}`)
                .should('be.visible')
                .and('not.be.empty')
                .and('contain', productData.spesificProduct.name); 

            cy.get(`.${productData.elementDetailProduct.description}`)
                .should('be.visible')
                .and('not.be.empty')
                .and('contain', productData.spesificProduct.description);

            cy.get(`.${productData.elementDetailProduct.price}`)
                .should('be.visible')
                .and('not.be.empty')
                .and('contain', productData.spesificProduct.price);
        });
    }
}

export default ProductPage;