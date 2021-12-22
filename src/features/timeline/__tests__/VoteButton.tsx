import { fireEvent, render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import VoteButton from "../VoteButton";

describe("VoteButton", () => {
  const votes = 10;

  test("up voting", () => {
    render(<VoteButton votes={votes} />);

    const voteText = screen.getByText(votes);
    const [upButton, downButton] = screen.getAllByRole("button");

    userEvent.click(upButton);

    expect(downButton).toBeDisabled();
    expect(voteText).toHaveTextContent("" + (votes + 1));
  });

  test("down voting", () => {
    render(<VoteButton votes={votes} />);

    const voteText = screen.getByText(votes);
    const [upButton, downButton] = screen.getAllByRole("button");

    userEvent.click(downButton);

    expect(upButton).toBeDisabled();
    expect(voteText).toHaveTextContent("" + (votes - 1));
  });

  test("zero votes gives special character", () => {
    render(<VoteButton votes={0} />);
    expect(() => screen.getByText("\u{2501}")).not.toThrow();
  });

  test("take vote back", () => {
    render(<VoteButton votes={votes} />);

    const voteText = screen.getByText(votes);
    const [upButton, downButton] = screen.getAllByRole("button");

    userEvent.click(upButton);
    userEvent.click(upButton);
    expect(voteText).toHaveTextContent("" + votes);
    expect(downButton).not.toBeDisabled();

    userEvent.click(downButton);
    userEvent.click(downButton);
    expect(voteText).toHaveTextContent("" + votes);
    expect(upButton).not.toBeDisabled();
  });
});
