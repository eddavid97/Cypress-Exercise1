describe("Verifying Login Process for SauceDemo", () => {
    beforeEach(() => {
      cy.clearCookies();
      cy.visit("https://www.saucedemo.com/");
    });

    it("Login should work for existing user.", () => {
        cy.get("[id^=user-name]").type("standard_user");
        cy.get("[id^=password]").type("secret_sauce");
        cy.get("[id^=login-button]").click();
        //Agregamos el maletín
        cy.get("[id^=add-to-cart-sauce-labs-backpack]").click();
        //Agregamos el babucho de bebé
        cy.get("[id^=add-to-cart-sauce-labs-onesie]").click();
        //Ingresamos al carrito de compras
        cy.get("[id^=shopping_cart_container]").click();
        //Validamos que las compras indicadas estén agregadas
        cy.contains("Sauce Labs Onesie")
        cy.contains("Sauce Labs Backpack")
        // cy.get("class").should("have.class", "Sauce Labs Onesie");
        //cy.get("div").should("have.class", "inventory_item_name");
        // Assertion that verifies that products list is displayed
      //  cy.get(".title").should("have.text", "Products")
      });
    });