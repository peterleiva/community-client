import { getByAltText, render } from "@testing-library/react";
import { UserFactory } from "test/factories";
import ParticipantsList from "../ParticipantsList";

describe("ParticipantsList", () => {
  const users = UserFactory.buildList(2);

  test("list all participants list", () => {
    const { container } = render(
      <ParticipantsList participants={users} size={2} />
    );

    expect(() => {
      getByAltText(container, users[0].username, { exact: false });
      getByAltText(container, users[1].username, { exact: false });
    }).not.toThrowError();
  });

  test("limit participants by size", () => {
    const { container } = render(
      <ParticipantsList participants={users} size={1} />
    );

    expect(() =>
      getByAltText(container, users[1].username, { exact: false })
    ).toThrow();
    expect(container).toHaveTextContent(/1/);
  });

  test("limit participants by 3", () => {
    const users = UserFactory.buildList(5);
    const { container } = render(<ParticipantsList participants={users} />);

    expect(container).toHaveTextContent(/2/);
  });
});
