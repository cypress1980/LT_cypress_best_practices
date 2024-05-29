/// <reference types="cypress" />

describe("Intercept the network request", () => {
  it("Intecept the call and remove cy.wait()", () => {
    cy.visit("https://the-internet.herokuapp.com/login");
    cy.intercept({
      url: "**/secure",
      method: "GET",
    }).as("login");
    cy.get("#username").type("tomsmith");
    cy.get("#password").type("SuperSecretPassword!");
    cy.get('[type="submit"]').click();
    cy.wait("@login");
  });
});
