import Footer from "@/components/layouts/footer";
import { footerLinks, siteDescription } from "@/config/constants";
import { render, screen } from "@testing-library/react";
import { expect } from "vitest";

vi.mock("@/config/constants", () => import("@/config/__mocks__/constants"));

// !Test suite for the Footer component
describe("testing Footer component", () => {
  // !Render component
  const renderComponent = () => {
    render(<Footer />);

    //!Get the rendered elements in the DOM
    const links = screen.getAllByTestId("footer link");
    const headings = screen.getAllByRole("heading");
    const about = screen.getByText(siteDescription);

    // !Return the need elements
    return { links, headings, about };
  };

  // !Check that the correct amount of headings have been rendered
  it("should render 3 headings", () => {
    const { headings } = renderComponent();
    expect(headings).toHaveLength(3);
  });

  // !Check that the headings are rendered correctly
  it("should render headings correctly", () => {
    const { headings } = renderComponent();
    const correctHeadings = [/about/i, /quick links/i, /contact us/i];
    headings.forEach((heading, i) => {
      expect(heading).toBeInTheDocument();
      expect(heading).toHaveTextContent(correctHeadings[i]);
    });
  });

  // !Check that the about description is rendered correctly
  it("should render about description correctly", () => {
    const { about } = renderComponent();
    expect(about).toBeInTheDocument();
    expect(about).toHaveTextContent(siteDescription);
  });

  //!Check that the correct amount of links have been rendered
  it(`should render ${footerLinks.length} links in the footer`, () => {
    const { links } = renderComponent();
    expect(links).toHaveLength(footerLinks.length);
  });

  // !Check that links are rendered correctly
  it("should render links correctly", () => {
    const { links } = renderComponent();
    links.forEach((link, i) => {
      expect(link).toBeInTheDocument();
      expect(link).toHaveTextContent(footerLinks[i].name);
      expect(link).toHaveAttribute("href", footerLinks[i].href);
    });
  });
});
