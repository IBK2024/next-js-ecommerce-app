import Heading from "@/components/ui/heading";
import { render, screen } from "@testing-library/react";
import { expect } from "vitest";

// !Test suite for the Heading component
describe("testing Heading component", () => {
  // !Mock heading text
  const mockHeadingText = "Lorem ipsum.";

  // !Render component
  const renderComponent = () => {
    render(<Heading>{mockHeadingText}</Heading>);

    // !Get the rendered elements in the DOM
    const headings = screen.getAllByRole("heading");

    return {
      headings: headings,
    };
  };

  // !Check that the correct amount of headings have been rendered
  it("should render 1 heading", () => {
    const { headings } = renderComponent();

    expect(headings).toHaveLength(1);
  });

  // !Check that the heading is rendered correctly
  it("should render the heading correctly", () => {
    const { headings } = renderComponent();

    expect(headings[0]).toBeInTheDocument();
    expect(headings[0]).toHaveTextContent(mockHeadingText);
  });
});
