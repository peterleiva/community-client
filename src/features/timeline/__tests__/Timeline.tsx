import { render } from "@testing-library/react";
import { ThreadFactory } from "test/factories";
import Timeline from "../Timeline";

describe("Timeline", () => {
  const threads = ThreadFactory.buildList(2);

  test("render list of threads", () => {
    const { container } = render(<Timeline threads={threads} />);

    expect(container).toHaveTextContent(threads[0].title);
    expect(container).toHaveTextContent(threads[1].title);
  });

  test.todo("render empty state when threads is empty");
});
