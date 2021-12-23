import { render } from "@testing-library/react";
import { ThreadFactory } from "test/factories";
import Card from "../Card";

describe("Timeline Card", () => {
  test("render thread information", () => {
    const thread = ThreadFactory.build();

    const { container } = render(<Card {...thread} />);

    expect(container).toHaveTextContent(thread.title);
  });
});
