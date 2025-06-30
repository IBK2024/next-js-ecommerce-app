import { mockCategoriesData } from "../../src/features/categories/services/__mocks__/CategoriesService";

// !End to end test suite for the home page
describe("test the homepage", () => {
  // !Test case for the home page
  context("test categories section on home page", () => {
    // !Test case for when there are categories
    context("test categories section with mock data", () => {
      beforeEach(() => {
        cy.setCookie("useMock", "true");
        cy.visit("/");
      });

      // !Check if the categories section exists
      it("should display a list of categories", () => {
        cy.get("[data-cy=categories-section]").should("exist");
      });

      // !Check if the categories section has the correct number of category cards
      it("should display at least one category card", () => {
        cy.get("[data-cy=categories-section]").within(() => {
          cy.get("[data-cy=category-card]").should("have.length", 1);
        });
      });

      // !Test that the categories card displays the correct information
      it("should display a categories card with the correct information", () => {
        cy.get("[data-cy=categories-section]")
          .children("[data-cy=category-card")
          .each(($card, i) => {
            cy.wrap($card).within(() => {
              cy.get("[data-testid=category-card-image]").should("be.visible");
              cy.get("[data-cy=category-card-content]")
                .should("exist")
                .within(() => {
                  cy.get("h1")
                    .should("not.be.empty")
                    .should("have.text", mockCategoriesData[i].name);
                  cy.get("p")
                    .should("contain", mockCategoriesData[i].description)
                    .should("contain", mockCategoriesData[i].numberOfProducts);
                });
            });
          });
      });

      // !Test that the categories card links to the correct category page
      it("should link to the correct category page", () => {
        cy.get('[data-cy="category-card"]').each(($card, i) => {
          const href = $card.prop("href");
          cy.wrap($card).click();
          cy.url().should("include", href);
          cy.go("back");
        });
      });
    });

    // !Test case for when there are no categories
    context("test categories section with empty mock data", () => {
      beforeEach(() => {
        cy.setCookie("useMock", "true");
        cy.setCookie("mock: noCategories", "true");
        cy.visit("/");
      });

      it("should display no categories text when there are no categories", () => {
        cy.get("[data-cy=categories-section]").should("not.exist");
        cy.get("[data-cy=categories-empty-message]")
          .should("exist")
          .contains("no categories available");
      });
    });
  });

  // !Test case for the categories page
  context("test categories section on categories page", () => {
    // !Test case for when there are categories
    context("test categories section with mock data", () => {
      beforeEach(() => {
        cy.setCookie("useMock", "true");
        cy.visit("/categories");
      });

      // !Check if the categories section exists
      it("should display a list of categories", () => {
        cy.get("[data-cy=categories-section]").should("exist");
      });

      // !Check if the categories section has the correct number of category cards
      it("should display at least one category card", () => {
        cy.get("[data-cy=categories-section]").within(() => {
          cy.get("[data-cy=category-card]").should("have.length", 1);
        });
      });

      // !Test that the categories card displays the correct information
      it("should display a categories card with the correct information", () => {
        cy.get("[data-cy=categories-section]")
          .children("[data-cy=category-card")
          .each(($card, i) => {
            cy.wrap($card).within(() => {
              cy.get("[data-testid=category-card-image]").should("be.visible");
              cy.get("[data-cy=category-card-content]")
                .should("exist")
                .within(() => {
                  cy.get("h1")
                    .should("not.be.empty")
                    .should("have.text", mockCategoriesData[i].name);
                  cy.get("p")
                    .should("contain", mockCategoriesData[i].description)
                    .should("contain", mockCategoriesData[i].numberOfProducts);
                });
            });
          });
      });

      // !Test that the categories card links to the correct category page
      it("should link to the correct category page", () => {
        cy.get('[data-cy="category-card"]').each(($card, i) => {
          const href = $card.prop("href");
          cy.wrap($card).click();
          cy.url().should("include", href);
          cy.go("back");
        });
      });
    });

    // !Test case for when there are no categories
    context("test categories section with empty mock data", () => {
      beforeEach(() => {
        cy.setCookie("useMock", "true");
        cy.setCookie("mock: noCategories", "true");
        cy.visit("/categories");
      });

      it("should display no categories text when there are no categories", () => {
        cy.get("[data-cy=categories-section]").should("not.exist");
        cy.get("[data-cy=categories-empty-message]")
          .should("exist")
          .contains("no categories available");
      });
    });
  });
});
