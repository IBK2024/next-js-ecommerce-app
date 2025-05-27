"use client";
import { act, render, screen } from "@testing-library/react";
import { expect } from "vitest";
import NavbarContextProvider from "../../context/navbarContext";
import { useNavbarContext } from "../useNavbarContext";

// !Mock components to test the useNavbarContext hook
const MockComponent = () => {
  const { toggle, setToggle } = useNavbarContext();

  return (
    <div>
      <button onClick={() => setToggle(!toggle)} type="button">
        Toggle
      </button>
      <p>{`Toggle is ${toggle ? "on" : "off"}`}</p>
    </div>
  );
};

// !Test suite for useNavbarContext hook
describe("test suite for useNavbarContext hook", () => {
  // !Check that the useNavbarContext hook throws an error when used outside of the NavbarContext provider
  it("should throw an error when used outside of NavbarContext provider", () => {
    // !Silence React error logs
    const spy = vi.spyOn(console, "error").mockImplementation(() => {
      // !Do nothing
    });

    expect(() => render(<MockComponent />)).toThrowError(
      "NavbarContextProvider must be used within NavbarContextProvider",
    );

    spy.mockRestore();
  });

  // !Check that the useNavbarContext hook works correctly when used inside the NavbarContext provider
  it("should work correctly when used inside NavbarContext provider", async () => {
    act(() => {
      render(
        <NavbarContextProvider>
          <MockComponent />
        </NavbarContextProvider>,
      );
    });

    const toggleButton = screen.getByRole("button", { name: /toggle/i });
    const toggleText = screen.getByText(/toggle is off/i);

    expect(toggleButton).toBeInTheDocument();
    expect(toggleText).toBeInTheDocument();
    expect(toggleText).toHaveTextContent("Toggle is off");

    // !Click the toggle button to change the toggle state
    act(() => {
      toggleButton.click();
    });
    expect(toggleText).toHaveTextContent("Toggle is on");

    act(() => {
      toggleButton.click();
    });
    expect(toggleText).toHaveTextContent("Toggle is off");
  });
});
