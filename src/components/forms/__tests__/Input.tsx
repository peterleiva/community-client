import { render } from "@testing-library/react";
import Input from "../Input";

describe("Input", () => {
  test("show helper text", () => {
    const helper = "helper text";
    const { container } = render(<Input helperText={helper} />);
    expect(container).toHaveTextContent(helper);
  });
});
