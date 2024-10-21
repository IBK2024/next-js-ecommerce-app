import Categories from "@/features/categories";
import { render, screen } from "@testing-library/react";

// TODO:Test categories
describe("Categories", () => {
  const renderComponent = () => {
    // !Render component
    render(<Categories />);
  };
  it("should", () => {
    renderComponent();

    screen.debug();
  });
});
