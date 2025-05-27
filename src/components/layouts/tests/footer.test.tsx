import Footer from "@/components/layouts/footer";
import { render, screen } from "@testing-library/react";
import { expect } from "vitest";

// !Test suite for the Footer component
describe("testing Footer component", () => {
  // !Mock footer links
  const mockFooterLinks = [
    { href: "/", name: "Home" },
    { href: "/about", name: "About" },
    { href: "/contact", name: "Contact" },
  ];

  // !Mock about description
  const mockAboutDescription =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";

  // !Render component
  const renderComponent = () => {
    render(<Footer links={mockFooterLinks} about={mockAboutDescription} />);

    //!Get the rendered elements in the DOM
    const links = screen.getAllByTestId("footer link");
    const headings = screen.getAllByRole("heading");
    const about = screen.getByText(mockAboutDescription);

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
    expect(about).toHaveTextContent(mockAboutDescription);
  });

  //!Check that the correct amount of links have been rendered
  it(`should render ${mockFooterLinks.length} links in the footer`, () => {
    const { links } = renderComponent();
    expect(links).toHaveLength(mockFooterLinks.length);
  });

  // !Check that links are rendered correctly
  it("should render links correctly", () => {
    const { links } = renderComponent();
    links.forEach((link, i) => {
      expect(link).toBeInTheDocument();
      expect(link).toHaveTextContent(mockFooterLinks[i].name);
      expect(link).toHaveAttribute("href", mockFooterLinks[i].href);
    });
  });
});
