import HeroSection from "@/components/ui/heroSection";
import { render, screen } from "@testing-library/react";
import { expect } from "vitest";

// !Test suite for the HeroSection component
describe("testing HeroSection component", () => {
  // !Render component
  const renderComponent = () => {
    render(<HeroSection />);

    return {
      heading: screen.getByRole("heading"),
      callToActionButton: screen.getByRole("button"),
    };
  };

  // !Check that a heading with the words products, affordable and prices was rendered
  it("should have a heading with the words products, affordable and price", () => {
    const { heading } = renderComponent();

    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent(/products/i);
    expect(heading).toHaveTextContent(/affordable/i);
    expect(heading).toHaveTextContent(/price/i);
  });

  // !Check that call to action button was rendered
  it("should render call to action button", () => {
    const { callToActionButton } = renderComponent();

    expect(callToActionButton).toBeInTheDocument();
    expect(callToActionButton).toHaveTextContent(/Shop Now/i);
    expect(callToActionButton).toHaveAttribute("href", "/categories");
  });
});
