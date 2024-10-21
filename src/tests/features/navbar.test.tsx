import Navbar from "@/features/navbar";
import { render, screen } from "@testing-library/react";

describe("Navbar", () => {
  // !Mock navbar links
  const mockNavbarLinks = [
    { href: "/", name: "Home" },
    { href: "/about", name: "About" },
    { href: "/contact", name: "Contact" },
  ];

  // !Render component
  const renderComponent = () => {
    // !Render the navbar component with the given links and render the resulting elements in the DOM.
    render(<Navbar links={mockNavbarLinks} />);

    // !Get the rendered elements in the DOM.
    const buttons = screen.getAllByRole("button");
    const links = screen.getAllByRole("link");

    // !Return the rendered elements and the mock navbar links.
    return {
      links: links,
      buttons: buttons,
      loginButton: buttons[0],
      callToActionButton: buttons[1],
      mockNavbarLinks: mockNavbarLinks,
    };
  };

  // !Check that the navbar has the correct number of buttons
  it("should have two buttons", () => {
    const { buttons } = renderComponent();
    expect(buttons).toHaveLength(2);
  });

  // !Check that the navbar has the correct number of links
  it(`should have ${mockNavbarLinks.length + 1} links`, () => {
    const { links } = renderComponent();
    expect(links).toHaveLength(mockNavbarLinks.length + 1);
  });

  // !Check that the links are rendered correctly
  it("should render links correctly", () => {
    const { links, mockNavbarLinks } = renderComponent();

    links.slice(1).forEach((link, i) => {
      expect(link).toBeInTheDocument();
      expect(link).toHaveTextContent(mockNavbarLinks[i].name);
      expect(link).toHaveAttribute("href", mockNavbarLinks[i].href);
    });
  });

  // !Check that call to action button was rendered
  it("should render call to action button", () => {
    const { callToActionButton } = renderComponent();

    expect(callToActionButton).toBeInTheDocument();
    expect(callToActionButton).toHaveTextContent(/shop now/i);
    expect(callToActionButton).toHaveAttribute("href", "/categories");
  });

  // !Check that login button was rendered
  it("should render login button", () => {
    const { loginButton } = renderComponent();

    expect(loginButton).toBeInTheDocument();
    expect(loginButton).toHaveTextContent(/login/i);
    expect(loginButton).toHaveAttribute("href", "/login");
  });
});
