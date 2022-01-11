import { render } from "@testing-library/react";
import { PostFactory, ThreadFactory } from "test/factories";
import Card from "../Card";

describe("Timeline Card", () => {
  test("render thread information", () => {
    const description = "nice message";
    const post = PostFactory.build({ message: description });
    const thread = ThreadFactory.build({}, { associations: { post } });
    const { container } = render(<Card {...thread} />);

    expect(container).toHaveTextContent(thread.title);
    expect(container).toHaveTextContent(description);
    expect(container).toHaveTextContent(thread.title);
    expect(container).toHaveTextContent("" + thread.replies);
    expect(container).toHaveTextContent(post.author.username);
  });
});
