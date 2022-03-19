import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import PasswordInput from "../PasswordInput";

describe("PasswordInput", () => {
  const label = "password label";

  test("renders password input", () => {
    const { getByPlaceholderText } = render(
      <PasswordInput id="input" placeholder="password" />
    );

    const input = getByPlaceholderText("password");

    expect(input).toBeInTheDocument();
    expect(input).toHaveAttribute("type", "password");
  });

  test("render visible password", () => {
    const { getByPlaceholderText } = render(
      <PasswordInput value={label} placeholder="password" show />
    );

    const input = getByPlaceholderText("password");

    expect(input).toHaveAttribute("type", "text");
    expect(input).toHaveDisplayValue(label);
  });

  test("toggle password visibility", () => {
    const { getByPlaceholderText, getByRole } = render(
      <PasswordInput placeholder="password" />
    );

    const input = getByPlaceholderText("password");
    const button = getByRole("button");

    expect(input).toHaveAttribute("type", "password");

    userEvent.click(button);
    expect(input).toHaveAttribute("type", "text");
  });

  test("pair-numbered toggle visibility keeps hidden", () => {
    const { getByPlaceholderText, getByRole } = render(
      <PasswordInput placeholder="password" />
    );

    const input = getByPlaceholderText("password");

    userEvent.click(getByRole("button"));
    userEvent.click(getByRole("button"));

    expect(input).toHaveAttribute("type", "password");
  });
});
