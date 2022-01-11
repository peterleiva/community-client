import { render, waitFor } from "@testing-library/react";
import { ThreadFactory } from "test/factories";
import Timeline from "../Timeline";
import { mockAllIsIntersecting } from "react-intersection-observer/test-utils";

describe("Timeline", () => {
  const threads = ThreadFactory.buildList(2);

  test("render list of threads", () => {
    const { container } = render(<Timeline threads={threads} />);

    expect(container).toHaveTextContent(threads[0].title);
    expect(container).toHaveTextContent(threads[1].title);
  });

  test.todo("render empty state when threads is empty");
  test.todo("don't render loading or caughUp when state is empty");

  test("render loading information", () => {
    const { container } = render(<Timeline threads={threads} loading={true} />);

    expect(container).toHaveTextContent(/loading/i);
  });

  test("Render Caugh Up when timeline reaches limits", () => {
    const { container } = render(<Timeline threads={threads} limit={1} />);

    expect(container).toHaveTextContent(/caugh up/i);
  });

  test("attach threads when reaches the end of timeline", async () => {
    const thread = ThreadFactory.build();

    const onReachEnd = jest.fn(() => threads.push(thread));

    const { container, rerender } = render(
      <Timeline threads={threads} onReachEnd={onReachEnd} />
    );

    mockAllIsIntersecting(true);

    await waitFor(() => expect(onReachEnd).toHaveBeenCalledTimes(1));
    rerender(<Timeline threads={threads} />);

    expect(container).toHaveTextContent(thread.title);
  });

  test("don't render more when caugh up", async () => {
    const thread = ThreadFactory.build();
    const onReachEnd = jest.fn(() => threads.push(thread));

    const { container, rerender } = render(
      <Timeline threads={threads} onReachEnd={onReachEnd} caughUp={true} />
    );

    mockAllIsIntersecting(true);

    expect(onReachEnd).not.toHaveBeenCalled();
    rerender(<Timeline threads={threads} caughUp={true} />);

    expect(container).not.toHaveTextContent(thread.title);
  });

  test("render caughup when has threads", () => {
    const { container } = render(<Timeline threads={threads} caughUp={true} />);

    expect(container).toHaveTextContent(/you are caugh up/i);
  });
});
