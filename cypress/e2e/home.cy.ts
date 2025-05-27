// !End to end test suite for the home page
describe("test the homepage", () => {
  // !Before each test, visit the home page
  beforeEach(() => {
    cy.visit("/"); // *Visit the homepage before each test
  });

  // !Test the hero section
  context("test hero section", () => {
    it("should exist", () => {
      cy.get("[data-cy=hero]") // *Get the hero section
        .should("exist") // *Check if it exists
        .and("be.visible"); // *Check if it is visible
    });

    it("should have a action button that works correctly", () => {
      cy.get("[data-cy=hero]").within(() => {
        cy.get("[data-cy=hero-action-button]") // *Get the hero action button
          .should("exist") // *Check if it exists
          .and("be.visible") // *Check if it is visible
          .click(); // *Click the button
        cy.url().should("include", "/categories"); // *Check if the URL includes /categories
      });
    });
  });

  // !Test the categories section
  context("test categories section", () => {});
});
