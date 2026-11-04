describe("Catálogo de produtos", () => {
  beforeEach(() => {
    cy.login();
  });

  it("deve exibir os produtos após autenticação", () => {
    cy.get(".inventory_item").should("have.length.greaterThan", 0);
    cy.get(".inventory_item").first().within(() => {
      cy.get(".inventory_item_name").should("be.visible");
      cy.get(".inventory_item_price").should("contain", "$");
    });
  });

  it("deve ordenar produtos por preço, do menor para o maior", () => {
    cy.get('[data-test="product-sort-container"]').select("lohi");

    cy.get(".inventory_item_price").then(($prices) => {
      const prices = [...$prices].map((element) =>
        Number(element.innerText.replace("$", ""))
      );
      const sortedPrices = [...prices].sort((a, b) => a - b);

      expect(prices).to.deep.equal(sortedPrices);
    });
  });

  it("deve adicionar um produto ao carrinho", () => {
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();

    cy.get(".shopping_cart_badge").should("have.text", "1");
    cy.get('[data-test="remove-sauce-labs-backpack"]').should("be.visible");
  });
});