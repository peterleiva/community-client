import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import VoteButton from "../VoteButton";

describe("VoteButton", () => {
  const votes = 10;

  test("up voting", () => {
    const { getByText, getAllByRole } = render(<VoteButton votes={votes} />);

    const voteText = getByText(votes);
    const [upButton, downButton] = getAllByRole("button");

    userEvent.click(upButton);

    expect(downButton).toBeDisabled();
    expect(voteText).toHaveTextContent("" + (votes + 1));
  });

  test("down voting", () => {
    const { getByText, getAllByRole } = render(<VoteButton votes={votes} />);

    const voteText = getByText(votes);
    const [upButton, downButton] = getAllByRole("button");

    userEvent.click(downButton);

    expect(upButton).toBeDisabled();
    expect(voteText).toHaveTextContent("" + (votes - 1));
  });

  test("zero votes gives special character", () => {
    const { getByText, getAllByRole } = render(<VoteButton votes={0} />);
    expect(() => getByText("\u{2501}")).not.toThrow();
  });

  test("take vote back", () => {
    const { getByText, getAllByRole } = render(<VoteButton votes={votes} />);

    const voteText = getByText(votes);
    const [upButton, downButton] = getAllByRole("button");

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
