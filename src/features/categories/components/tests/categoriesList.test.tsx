import { render, screen, within } from "@testing-library/react";
import { expect } from "vitest";
import type { CategoryType } from "../../types/categoriesTypes";
import CategoriesList from "../categoriesList";

vi.mock("@/components/ui/blurImage", () => import("@/components/ui/__mocks__/blurImage"));

// !Mock categories data
const mockCategories: CategoryType[] = [
  {
    id: "1",
    name: "Category 1",
    description: "Description 1",
    image: "",
    numberOfProducts: 10,
  },
  {
    id: "2",
    name: "Category 2",
    description: "Description 2",
    image: "",
    numberOfProducts: 20,
  },
];

// !Test suite for CategoriesList component
describe("testing CategoriesList component", () => {
  // !Test categories section with mock categories length equal to 0
  // !Render the component with mock categories length equal to 0
  const renderComponent1 = () => {
    render(<CategoriesList categories={[]} />);

    // !Get the rendered elements in the DOM
    const categoriesSection = screen.getByTestId("categories-section");
    const noCategoriesMessage = screen.getByRole("paragraph");

    return { categoriesSection, noCategoriesMessage };
  };

  // !Check that the categories section is rendered
  it("should render the categories section", () => {
    const { categoriesSection } = renderComponent1();

    expect(categoriesSection).toBeInTheDocument();
  });

  // !Check that the component has no categories
  it("should have no categories", () => {
    const { noCategoriesMessage } = renderComponent1();

    expect(noCategoriesMessage).toBeInTheDocument();
    expect(noCategoriesMessage).toHaveTextContent(/no categories/i);
  });

  // !Test categories section with mock categories length greater than 0
  // !Render component with mock categories length greater than 0
  const renderComponent2 = () => {
    render(<CategoriesList categories={mockCategories} />);

    // !Get the rendered elements in the DOM
    const categoriesSection = screen.getByTestId("categories-section");
    const categories = screen.getAllByTestId("category-card");

    return { categoriesSection, categories };
  };

  // !Check that the categories section is rendered
  it("should render the categories section", () => {
    const { categoriesSection } = renderComponent2();

    expect(categoriesSection).toBeInTheDocument();
  });

  // !Check that the component has the correct number of categories
  it(`should have ${mockCategories.length} categories`, () => {
    const { categories } = renderComponent2();

    expect(categories).toHaveLength(mockCategories.length);
  });

  // !Check that each category is rendered correctly
  it("should render each category correctly", () => {
    const { categories } = renderComponent2();
    categories.forEach((category, i) => {
      expect(category).toBeInTheDocument();
      expect(category).toHaveAttribute("href", `/categories/${mockCategories[i].name.toLowerCase()}`);

      // !Check that the category card has the correct content
      const content = within(category).getByTestId("category-card-content");
      expect(content).toBeInTheDocument();
      expect(content).toHaveTextContent(mockCategories[i].name);
      expect(content).toHaveTextContent(mockCategories[i].description);
      expect(content).toHaveTextContent(`${mockCategories[i].numberOfProducts} items`);

      // !Check that the category card has the correct image
      // !Note: The image src attribute is an empty string in the mock data
      const image = within(category).getByRole("img");
      expect(image).toBeInTheDocument();
      expect(image).toHaveAttribute("src", mockCategories[i].image);
      expect(image).toHaveAttribute("alt", expect.stringContaining(mockCategories[i].name));
    });
  });
});
