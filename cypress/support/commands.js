// Comando reutilizável para autenticação.
// Mantém os testes mais legíveis e evita repetir os mesmos passos.
Cypress.Commands.add("login", (username = "standard_user", password = "secret_sauce") => {
  cy.visit("/");
  cy.get('[data-test="username"]').should("be.visible").type(username);
  cy.get('[data-test="password"]').should("be.visible").type(password);
  cy.get('[data-test="login-button"]').click();
});