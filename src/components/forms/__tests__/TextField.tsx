import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { TextField } from "../TextField";
import Form from "../Form";
import casual from "casual";

type TextFieldProps = React.ComponentPropsWithoutRef<typeof TextField>;

const setupTextField = (
  props: Partial<TextFieldProps> = {}
): TextFieldProps => {
  return {
    name: casual.word,
    ...props,
  };
};

describe("TextField", () => {
  test("renders label", () => {
    const label = casual.title;
    const args = setupTextField({ label });

    const { container } = render(
      <Form>
        <TextField {...args} />
      </Form>
    );

    expect(container).toHaveTextContent(label);
  });

  test("type in text field", async () => {
    const label = "fake_label";
    const args = setupTextField({ label });

    const { getByLabelText } = render(
      <Form>
        <TextField {...args} />
      </Form>
    );

    const fieldText = casual.title;

    const field = getByLabelText(label);
    userEvent.type(field, fieldText);

    expect(field).toHaveValue(fieldText);
  });

  test("clears field", () => {
    const label = "fake_label";
    const args = setupTextField({ label });

    const { getByLabelText, getByRole } = render(
      <Form>
        <TextField {...args} />
      </Form>
    );

    const fieldText = casual.title;

    const field = getByLabelText(label);
    userEvent.type(field, fieldText);

    userEvent.click(getByRole("button"));
    expect(field).not.toHaveValue(fieldText);
  });

  test("shows text length", () => {
    const label = casual.word;
    const args = setupTextField({ label, showLength: true });

    const { container, getByLabelText } = render(
      <Form>
        <TextField {...args} />
      </Form>
    );

    const field = getByLabelText(label);
    const value = casual.title;
    userEvent.type(field, value);

    expect(container).toHaveTextContent("" + value.length);
  });
});
