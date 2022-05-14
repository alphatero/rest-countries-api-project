import { fireEvent, render, screen } from "@testing-library/react";
import { ThemeToggle } from "../ThemeToggle";

describe("toggle button", () => {
  test("when click theme toggle button , then document element will toggle class list dark", () => {
    render(<ThemeToggle />);

    const button = screen.getByRole("button");

    fireEvent.click(button);

    const element = document.documentElement;

    expect(element.classList.contains("dark")).toBe(true);
  });

  test("when double click theme toggle button , then document element will toggle class list dark", () => {
    render(<ThemeToggle />);

    const button = screen.getByRole("button");

    fireEvent.click(button);

    const element = document.documentElement;

    expect(element.classList.contains("dark")).toBe(false);
  });
});
