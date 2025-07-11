import Navbar from "@/components/layouts/navbar";
import { navbarLinks } from "@/config/constants";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { expect } from "vitest";

vi.mock("@/config/constants", () => import("@/config/__mocks__/constants"));

// !Test suite for the Navbar component
describe("testing Navbar component", () => {
  // !Render component
  const renderComponent = () => {
    // !Render the navbar component with the given links and render the resulting elements in the DOM.
    render(<Navbar />);

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
  it(`should have ${navbarLinks.length * 2 + 1} links`, () => {
    const { links } = renderComponent();
    expect(links).toHaveLength(navbarLinks.length * 2 + 1);
  });

  // !Check that the links are rendered correctly
  it("should render links correctly", () => {
    const { links } = renderComponent();

    links.slice(1).forEach((link, i) => {
      expect(link).toBeInTheDocument();
      if (i > navbarLinks.length - 1) {
        expect(link).toHaveTextContent(navbarLinks[i - navbarLinks.length].name);
        expect(link).toHaveAttribute("href", navbarLinks[i - navbarLinks.length].href);
      } else {
        expect(link).toHaveTextContent(navbarLinks[i].name);
        expect(link).toHaveAttribute("href", navbarLinks[i].href);
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
    renderComponent();
    const user = userEvent.setup();
    let toggleButton = screen.getByTestId("toggle-button");

    // !Check toggle behavior
    await user.click(toggleButton);
    let dropdownMenu = screen.getByTestId("dropdown-menu");
    expect(dropdownMenu).toHaveClass("max-h-[60%]");

    toggleButton = screen.getByTestId("toggle-button");
    await user.click(toggleButton);
    dropdownMenu = screen.getByTestId("dropdown-menu");
    expect(dropdownMenu).toHaveClass("max-h-0");
  });
});
