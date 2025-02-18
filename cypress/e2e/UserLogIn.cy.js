import { credentials, url } from "../fixtures/vite.json";

it("Simple user log in", () => {
  cy.visit(url);
  cy.wait(1000);

  cy.get("main>article:nth-child(4)").click();
  cy.get("button").contains("iniciar sesión", { matchCase: false }).click();
  cy.get("input[type='email']").type(credentials.email);
  cy.get("input[type='password']").type(credentials.password);
  cy.get("button").contains("iniciar", { matchCase: false }).click();
  cy.get("header>div>section>figure").should("be.visible").contains(credentials.nickname);
  cy.get("header>div>section>article").click();
  cy.get("header>div>section>article").should("be.visible").contains("cerrar sesión", { matchCase: false }).click();
  cy.wait(500);

  cy.get("header>div>section").children().contains("registrarme", { matchCase: false }).should("be.visible");
  cy.get(".iziToast-wrapper").contains("sesión cerrada", { matchCase: false }).should("be.visible");
});
