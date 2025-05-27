import Button from "@/components/ui/button";
import { render, screen } from "@testing-library/react";
import { expect } from "vitest";

// !Test suite for the Button component
describe("testing Button component", () => {
  // !Mock button data
  const mockButtonText = "Lorem ipsum.";
  const mockButtonHref = "/lorem-ipsum";

  // !Render component with href passed as prop
  const renderComponentWithHref = () => {
    render(<Button href={mockButtonHref}>{mockButtonText}</Button>);

    const button = screen.getByRole("button");

    return { button };
  };

  // !Render the component without href passed as prop
  const renderComponentWithoutHref = () => {
    render(<Button>{mockButtonText}</Button>);

    const button = screen.getByRole("button");

    return { button };
  };

  // TODO:Test that the button is rendered correctly with href passed as prop
  it("should render the button correctly with href", () => {
    const { button } = renderComponentWithHref();

    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent(mockButtonText);
    expect(button).toHaveAttribute("href", mockButtonHref);
  });

  // TODO:Test that the button is rendered correctly without href passed as prop
  it("should render the button correctly without href", () => {
    const { button } = renderComponentWithoutHref();

    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent(mockButtonText);
    expect(button).toHaveAttribute("href", "#");
  });
});
