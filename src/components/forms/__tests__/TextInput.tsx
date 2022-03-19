import { render } from "@testing-library/react";
import TextInput from "../TextInput";

describe("TextInput", () => {
  test("show helper text", () => {
    const helper = "helper text";
    const { container } = render(<TextInput helperText={helper} />);
    expect(container).toHaveTextContent(helper);
  });
});
