import Footer from "@/features/footer";
import { render, screen } from "@testing-library/react";

describe("Footer", () => {
  // !Mock footer links
  const mockFooterLinks = [
    { href: "/", name: "Home" },
    { href: "/about", name: "About" },
    { href: "/contact", name: "Contact" },
  ];

  // !Render component
  const renderComponent = () => {
    render(<Footer links={mockFooterLinks} />);

    //!Get the rendered elements in the DOM
    const links = screen.getAllByRole("link");
    const headings = screen.getAllByRole("heading");
    const buttons = screen.getAllByRole("button");

    // !Return the need elements
    return { links, headings, buttons };
  };

  //!Check that the correct amount of links have been rendered
  it(`should render ${mockFooterLinks.length + 1} links in the footer`, () => {
    const { links } = renderComponent();

    expect(links).toHaveLength(mockFooterLinks.length + 1);
  });

  // !Check that links are rendered correctly
  it("should render links correctly", () => {
    const { links } = renderComponent();

    links.slice(1).forEach((link, i) => {
      expect(link).toBeInTheDocument();
      expect(link).toHaveTextContent(mockFooterLinks[i].name);
      expect(link).toHaveAttribute("href", mockFooterLinks[i].href);
    });
  });

  // !Check that the correct amount of headings have been rendered
  it("should render 3 headings", () => {
    const { headings } = renderComponent();

    expect(headings).toHaveLength(3);
  });

  // !Check that the headings are rendered correctly
  it("should render headings correctly", () => {
    const { headings } = renderComponent();

    const correctHeadings = [/links/i, /contacts/i, /newsletter/i];

    headings.forEach((heading, i) => {
      expect(heading).toBeInTheDocument();
      expect(heading).toHaveTextContent(correctHeadings[i]);
    });
  });

  // !Check that there is only one button with the text 'subscribe'
  it("should have only one button with the text 'subscribe'", () => {
    const { buttons } = renderComponent();

    expect(buttons).toHaveLength(1);
    expect(buttons[0]).toHaveTextContent(/subscribe/i);
  });
});
