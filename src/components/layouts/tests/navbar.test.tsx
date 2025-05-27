import Navbar from "@/components/layouts/navbar";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { expect } from "vitest";

// !Test suite for the Navbar component
describe("testing Navbar component", () => {
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
    const toggleButton = screen.getAllByTestId("toggle-button");
    const dropdown = screen.getByTestId("dropdown-menu");

    // !Return the rendered elements and the mock navbar links.
    return {
      links: links,
      buttons: buttons,
      loginButtons: [buttons[0], buttons[2]],
      callToActionButtons: [buttons[1], buttons[3]],
      toggleButton: toggleButton,
      dropdown: dropdown,
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

  // !Check that the call to action buttons were rendered
  it("should render two call to action buttons", () => {
    const { callToActionButtons } = renderComponent();

    callToActionButtons.forEach((callToActionButton) => {
      expect(callToActionButton).toBeInTheDocument();
      expect(callToActionButton).toHaveTextContent(/shop now/i);
      expect(callToActionButton).toHaveAttribute("href", "/categories");
    });
  });

  // !Check that the login buttons were rendered
  it("should render two login buttons", () => {
    const { loginButtons } = renderComponent();

    loginButtons.forEach((loginButton) => {
      expect(loginButton).toBeInTheDocument();
      expect(loginButton).toHaveTextContent(/login/i);
      expect(loginButton).toHaveAttribute("href", "/login");
    });
  });

  // !Check that the navbar is responsive
  it("should be responsive", async () => {
    const { toggleButton, dropdown } = renderComponent();

    expect(toggleButton).toHaveLength(2);
    expect(toggleButton[0]).toBeInTheDocument();
    expect(toggleButton[1]).toBeInTheDocument();

    // !Check toggle behavior
    const user = userEvent.setup();
    await user.click(toggleButton[0]);

    expect(dropdown).toBeVisible();
    expect(dropdown).toHaveAttribute("aria-label", "open");
  });
});
