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
      loginButtons: [buttons[0], buttons[2]],
      callToActionButtons: [buttons[1], buttons[3]],
    };
  };

  // !Check that the navbar has the correct number of buttons
  it("should have four buttons", () => {
    const { buttons } = renderComponent();
    expect(buttons).toHaveLength(4);
  });

  // !Check that the navbar has the correct number of links
  it(`should have ${mockNavbarLinks.length * 2 + 1} links`, () => {
    const { links } = renderComponent();
    expect(links).toHaveLength(mockNavbarLinks.length * 2 + 1);
  });

  // !Check that the links are rendered correctly
  it("should render links correctly", () => {
    const { links } = renderComponent();

    links.slice(1).forEach((link, i) => {
      expect(link).toBeInTheDocument();
      if (i > mockNavbarLinks.length - 1) {
        expect(link).toHaveTextContent(mockNavbarLinks[i - mockNavbarLinks.length].name);
        expect(link).toHaveAttribute("href", mockNavbarLinks[i - mockNavbarLinks.length].href);
      } else {
        expect(link).toHaveTextContent(mockNavbarLinks[i].name);
        expect(link).toHaveAttribute("href", mockNavbarLinks[i].href);
      }
    });
  });

  // !Check that call to action button was rendered
  it("should render two call to action buttons", () => {
    const { callToActionButtons } = renderComponent();

    callToActionButtons.forEach((callToActionButton) => {
      expect(callToActionButton).toBeInTheDocument();
      expect(callToActionButton).toHaveTextContent(/shop now/i);
      expect(callToActionButton).toHaveAttribute("href", "/categories");
    });
  });

  // !Check that login button was rendered
  it("should render two login buttons", () => {
    const { loginButtons } = renderComponent();

    loginButtons.forEach((loginButton) => {
      expect(loginButton).toBeInTheDocument();
      expect(loginButton).toHaveTextContent(/login/i);
      expect(loginButton).toHaveAttribute("href", "/login");
    });
  });
});
