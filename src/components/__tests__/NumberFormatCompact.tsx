import NumberFormatCompact from "../NumberFormatCompact";
import { render } from "@testing-library/react";

describe("NumberFormatCompact", () => {
  test("print given token when value is 0", () => {
    const token = "hfj";

    const { container } = render(
      <NumberFormatCompact zeroToken={token} value={0} />
    );

    expect(container).toHaveTextContent(token);
  });

  test("print formatted number", () => {
    const value = 10;
    const formatter = Intl.NumberFormat(undefined, { notation: "compact" });

    const { container } = render(<NumberFormatCompact value={10} />);

    expect(container).toHaveTextContent(formatter.format(value));
  });
});
