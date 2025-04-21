import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import Button from "./Test";

test("renders button label", () => {
  render(<Button label="click me" onClick={() => {}} />);
  const button = screen.getByText("click me");
  expect(button).toBeInTheDocument();
});

test("calls onclick when clicked", () => {
  const handleClick = jest.fn();
  render(<Button label="click me" onClick={handleClick} />);

  const button = screen.getByTestId("custom-button");
  fireEvent.click(button);
  expect(handleClick).toHaveBeenCalledTimes(1);
});