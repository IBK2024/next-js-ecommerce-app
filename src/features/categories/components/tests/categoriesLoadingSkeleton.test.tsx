import CategoriesLoadingSkeleton from "@/features/categories/components/categoriesLoadingSkeleton";
import { render, screen } from "@testing-library/react";
import { expect } from "vitest";

// !Test suite for CategoriesLoadingSkeleton component
describe("testing CategoriesLoadingSkeleton component", () => {
  // !Render component
  const renderComponent = () => {
    render(<CategoriesLoadingSkeleton />);

    // !Get the rendered elements in the DOM
    const categoriesCardSkeleton = screen.getAllByTestId("category-card-skeleton");

    return { categoriesCardSkeleton };
  };

  // !Check that the correct amount of category card skeletons have been rendered
  it("should render 5 skeletons", () => {
    const { categoriesCardSkeleton } = renderComponent();

    expect(categoriesCardSkeleton).toHaveLength(5);
  });

  // !Check that the category card skeletons are rendered correctly
  it("should render the skeletons correctly", () => {
    const { categoriesCardSkeleton } = renderComponent();

    categoriesCardSkeleton.forEach((skeleton) => {
      expect(skeleton).toBeInTheDocument();
    });
  });
});
