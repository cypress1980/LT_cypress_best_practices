/// <reference types="cypress" />
// beforeEach(() => {
//   cy.visit("/index.php?route=account/login");
//   cy.get('[id="input-email"]').type("lambdatest@yopmail.com");
//   cy.get('[id="input-password"]').type("lambdatest");
//   cy.get('[type="submit"]').eq(0).click();
// });

// it("Search the Product", () => {
//   cy.get('[name="search"]')
//     .eq(0)
//     .type("Sony VAIO")
//     .should("have.value", "Sony VAIO");
//   cy.get('[type="submit"]').eq(0).click();
// });
// it("Verify Product after search ", () => {
//   cy.contains("Sony VAIO");
// });

// it("Click on Lambdatest Logo", () => {
//   cy.get('[title="Poco Electro"]').click();
// });
// it("Scroll to bottom and Click on Product Verify prooduct 'iPod Touch' ", () => {
//   cy.get('[title="Nikon D300"]').eq(0).scrollIntoView().click();
// });

describe("login with seassion", () => {
  beforeEach(() => {
    cy.loginWithSeassion("lambdatest@yopmail.com", "lambdatest");
    cy.visit("/index.php");
  });
  it("Search the Product", () => {
    cy.get('[name="search"]')
      .eq(0)
      .type("Sony VAIO")
      .should("have.value", "Sony VAIO");
    cy.get('[type="submit"]').eq(0).click();
  });
  it("Verify Product after search ", () => {
    cy.contains("Sony VAIO");
  });

  it("Click on Lambdatest Logo", () => {
    cy.get('[title="Poco Electro"]').click();
  });
  it("Scroll to bottom and Click on Product Verify prooduct 'iPod Touch' ", () => {
    cy.get('[title="Nikon D300"]').eq(0).scrollIntoView().click();
  });
});
