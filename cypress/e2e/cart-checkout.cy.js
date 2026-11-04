describe("Carrinho e finalização da compra", () => {
  beforeEach(() => {
    cy.login();
  });

  it("deve permitir revisar um produto no carrinho", () => {
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    cy.get(".shopping_cart_link").click();

    cy.url().should("include", "/cart.html");
    cy.get(".cart_item").should("have.length", 1);
    cy.get(".inventory_item_name").should("contain", "Sauce Labs Backpack");
  });

  it("deve concluir uma compra com dados válidos", () => {
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    cy.get(".shopping_cart_link").click();
    cy.get('[data-test="checkout"]').click();

    cy.get('[data-test="firstName"]').type("Gabriel");
    cy.get('[data-test="lastName"]').type("Hierro");
    cy.get('[data-test="postalCode"]').type("24900-000");
    cy.get('[data-test="continue"]').click();

    cy.url().should("include", "/checkout-step-two.html");
    cy.get(".summary_info").should("be.visible");
    cy.get('[data-test="finish"]').click();

    cy.url().should("include", "/checkout-complete.html");
    cy.get(".complete-header").should("contain", "Thank you for your order");
  });

  it("deve informar quando dados obrigatórios não forem preenchidos", () => {
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    cy.get(".shopping_cart_link").click();
    cy.get('[data-test="checkout"]').click();
    cy.get('[data-test="continue"]').click();

    cy.get('[data-test="error"]')
      .should("be.visible")
      .and("contain", "First Name is required");
  });
});