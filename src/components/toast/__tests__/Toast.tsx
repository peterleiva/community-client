import { render } from "@testing-library/react";
import Toast from "../Toast";

const setupArgs = (props: Partial<ElementProps<typeof Toast>> = {}) => {
  return {
    title: "fake_title",
    ...props,
  };
};

jest.useFakeTimers();

describe("Toast", () => {
  const onClose = jest.fn();

  beforeEach(() => {
    jest.clearAllTimers();
    jest.clearAllMocks();
  });

  test("render Toast", () => {
    const args = setupArgs();
    const { container } = render(<Toast {...args} />);

    expect(container).toHaveTextContent(args.title);
  });

  test("autohide Toast message", () => {
    const time = 1_000;

    const args = setupArgs({ wait: time, onClose });

    render(<Toast {...args} />);
    jest.advanceTimersByTime(time);

    expect(args.onClose).toHaveBeenCalledTimes(1);
  });

  test("pin the Toast with autohide = false", () => {
    const time = 1_000;
    const args = setupArgs({ wait: time, onClose, autohide: false });

    render(<Toast {...args} />);
    jest.advanceTimersByTime(time);

    expect(args.onClose).not.toHaveBeenCalled();
  });
});
