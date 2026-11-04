describe("Autenticação", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("deve permitir login com credenciais válidas", () => {
    cy.get('[data-test="username"]').type("standard_user");
    cy.get('[data-test="password"]').type("secret_sauce");
    cy.get('[data-test="login-button"]').click();

    cy.url().should("include", "/inventory.html");
    cy.get(".title").should("have.text", "Products");
  });

  it("deve exibir mensagem ao informar senha incorreta", () => {
    cy.get('[data-test="username"]').type("standard_user");
    cy.get('[data-test="password"]').type("senha_incorreta");
    cy.get('[data-test="login-button"]').click();

    cy.get('[data-test="error"]')
      .should("be.visible")
      .and("contain", "Username and password do not match");
  });

  it("deve exigir o preenchimento do usuário", () => {
    cy.get('[data-test="password"]').type("secret_sauce");
    cy.get('[data-test="login-button"]').click();

    cy.get('[data-test="error"]')
      .should("be.visible")
      .and("contain", "Username is required");
  });
});