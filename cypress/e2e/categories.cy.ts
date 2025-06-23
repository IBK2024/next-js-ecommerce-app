// !Mock for the categories service returning a list of categories
const mock_category_name = "T-shirt";
const mock_category_description = "A comfortable cotton t-shirt";
const mock_number_of_products = 10;
const originalMock = `
export default class CategoriesService {
  getCategories() {
    return [
      {
        id: "1",
        name: "${mock_category_name}",
        description: "${mock_category_description}",
        numberOfProducts: ${mock_number_of_products},
        image: "/mock-image.png",
      },
    ];
  }
}`;

// !Mock for the categories service returning an empty list of categories
const emptyMock = `
export default class CategoriesService {
  getCategories() {
    return [];
  }
}
`;

// !End to end test suite for the home page
describe("test the homepage", () => {
  // !Test case for the home page
  context("test categories section on home page", () => {
    // !Test case for when there are categories
    context("test categories section with mock data", () => {
      beforeEach(() => {
        cy.writeFile(
          "src/features/categories/services/__mocks__/CategoriesService.ts",
          originalMock
        );
        cy.setCookie("useMock", "true");
        cy.visit("/");
      });

      afterEach(() => {
        cy.writeFile(
          "src/features/categories/services/__mocks__/CategoriesService.ts",
          originalMock
        );
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
        cy.get("[data-cy=categories-section]").within(() => {
          cy.get("[data-cy=category-card")
            .first()
            .within(() => {
              cy.get("[data-testid=category-card-image]").should("be.visible");
              cy.get("[data-cy=category-card-content]")
                .should("exist")
                .within(() => {
                  cy.get("h1").should("not.be.empty").should;
                  cy.get("p")
                    .should("not.be.empty")
                    .should("contain", mock_category_description)
                    .should("contain", mock_number_of_products + " items");
                });
            });
        });
      });

      // !Test that the categories card links to the correct category page
      it("should link to the correct category page", () => {
        cy.get('[data-cy="category-card"]').first().click();
        cy.url().should(
          "include",
          `/categories/${mock_category_name.toLocaleLowerCase()}`
        );
      });
    });

    // TODO:Test case for when there are no categories
    context("test categories section with empty mock data", () => {
      beforeEach(() => {
        cy.writeFile(
          "src/features/categories/services/__mocks__/CategoriesService.ts",
          emptyMock
        );
        cy.setCookie("useMock", "true");
        cy.visit("/");
      });

      afterEach(() => {
        cy.writeFile(
          "src/features/categories/services/__mocks__/CategoriesService.ts",
          originalMock
        );
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
    beforeEach(() => {
      cy.visit("/categories");
    });

    // TODO:Test case for when there are categories
    // TODO:Test case for when there are no categories
  });
});
