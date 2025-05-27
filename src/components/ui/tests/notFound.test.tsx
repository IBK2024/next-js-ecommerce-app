import { render, screen } from "@testing-library/react";
import { expect } from "vitest";
import NotFound from "../notFound";

// !Test suite for the NotFound component
describe("testing NotFound component", () => {
  // !Render component
  const renderComponent = () => {
    render(<NotFound />);

    const headings = screen.getAllByRole("heading");
    const message = screen.getByRole("paragraph");
    const link = screen.getByRole("button");

    expect(headings).toHaveLength(2);

    return {
      heading1: headings[0],
      heading2: headings[1],
      message: message,
      link: link,
    };
  };

  // !Test that a heading with the text '404' is rendered
  it("should render heading with text '404'", () => {
    const { heading1 } = renderComponent();

    expect(heading1).toBeInTheDocument();
    expect(heading1).toHaveTextContent(/404/);
  });

  //!Test that a heading with the text 'oops page not found' is rendered
  it("should render a heading with the text 'oops page not found'", () => {
    const { heading2 } = renderComponent();

    expect(heading2).toBeInTheDocument();
    expect(heading2).toHaveTextContent(/oops/i);
    expect(heading2).toHaveTextContent(/page not found/i);
  });

  //!Test that a message indicating the user is navigating to a non-existent page is rendered
  it("should render a message indicating the user is navigating to a non-existent page", () => {
    const { message } = renderComponent();

    expect(message).toBeInTheDocument();
    expect(message).toHaveTextContent(/page/i);
    expect(message).toHaveTextContent(/does not exist/i);
  });

  //!Test that a link to the homepage is rendered
  it("should render a link to the homepage", () => {
    const { link } = renderComponent();

    expect(link).toBeInTheDocument();
    expect(link).toHaveTextContent(/home/i);
    expect(link).toHaveAttribute("href", "/");
  });
});
