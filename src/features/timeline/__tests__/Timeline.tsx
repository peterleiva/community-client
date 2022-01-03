import Timeline from "../Timeline";
import { render } from "@testing-library/react";
import { ThreadFactory } from "test/factories";

describe("Timeline", () => {
  const threads = ThreadFactory.buildList(2);

  test("render list of threads", () => {
    const { container } = render(<Timeline threads={threads} />);

    expect(container).toHaveTextContent(threads[0].title);
    expect(container).toHaveTextContent(threads[1].title);
  });

  test("show caughUp component when caughUp is true", () => {
    const { container } = render(<Timeline threads={threads} caughUp={true} />);

    expect(container).toHaveTextContent(/caugh up/i);
  });

  test("render loading information", () => {
    const { container } = render(<Timeline loading={true} threads={threads} />);

    expect(container).toHaveTextContent(/loading/i);
  });

  test.todo("render empty state when threads is empty");
});
