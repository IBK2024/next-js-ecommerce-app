import { render, screen } from "@testing-library/react";
import { expect } from "vitest";
import LoadingSpinner from "../loadingSpinner";

// !Test suite for the LoadingSpinner component
describe("testing LoadingSpinner component", () => {
  // !Render component
  const renderComponent = () => {
    render(<LoadingSpinner />);

    // !Get the rendered elements in the DOM
    const loadingSpinner = screen.getByTestId("loading-spinner");

    return {
      loadingSpinner,
    };
  };

  // !Check that the loading spinner is rendered correctly
  it("should render 1 heading", () => {
    const { loadingSpinner } = renderComponent();
    expect(loadingSpinner).toBeInTheDocument();
  });
});
