import { render, screen, fireEvent } from "@testing-library/react";
import ColorButton from "./ColorButton";

test("Button has correct initial color", () => {
  render(<ColorButton />);
  const colorButton = screen.getByRole("button", {
    name: "Change to MidnightBlue",
  });
  expect(colorButton).toHaveStyle({ backgroundColor: "MediumVioletRed" });
});

test("Button has correct initial text", () => {
  render(<ColorButton />);
  const colorButton = screen.getByRole("button", {
    name: "Change to MidnightBlue",
  });
  expect(colorButton).toHaveTextContent("Change to MidnightBlue");
});

test("Button has white label text", () => {
  render(<ColorButton />);
  const colorButton = screen.getByRole("button", {
    name: "Change to MidnightBlue",
  });
  expect(colorButton).toHaveStyle({ color: "white" });
});

test("Button turns MidnightBlue when clicked", () => {
  render(<ColorButton />);
  const colorButton = screen.getByRole("button", {
    name: "Change to MidnightBlue",
  });

  expect(colorButton).toHaveStyle({ backgroundColor: "MediumVioletRed" });
  expect(colorButton).toHaveTextContent("Change to MidnightBlue");

  fireEvent.click(colorButton);

  expect(colorButton).toHaveStyle({ backgroundColor: "MidnightBlue" });
  expect(colorButton).toHaveTextContent("Change to MediumVioletRed");
});

test("Button can not call a function when disabled", () => {
  render(<ColorButton disabled />);

  const colorButton = screen.getByRole("button", {
    name: "Change to MidnightBlue",
  });
  fireEvent.click(colorButton);
  expect(colorButton).toBeDisabled();
});

test("Button need to be gray when it is disabled", () => {
  render(<ColorButton disabled />);

  const colorButton = screen.getByRole("button", {
    name: "Change to MidnightBlue",
  });
  expect(colorButton).toHaveStyle({ backgroundColor: "gray" });
});
