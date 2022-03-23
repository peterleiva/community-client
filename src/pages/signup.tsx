import { type NextPage } from "next";
import { Form, TextField } from "components/forms";
import Button from "components/Button";
import { useToast } from "components/toast";
import { BsArrowRight as RightIcon } from "react-icons/bs";
import { type SubmitHandler } from "react-hook-form";

type FormData = {
  email: string;
  password: string;
};

const SignUp: NextPage = () => {
  const { dispatch } = useToast();

  const notify = () => {
    dispatch({ type: "NOTIFY", payload: { title: "Test" } });
  };

  const submission: SubmitHandler<FormData> = (data, e) => {
    e?.preventDefault();
    notify();
  };

  return (
    <div className="w-3/4 mx-auto">
      <h1>Sign Up</h1>
      <Form<FormData> onSubmit={submission} className="flex flex-col gap-4">
        <TextField name="email" label="Email" required />
        <TextField
          name="password"
          label="Password"
          autoComplete="current-password"
          required
        />
        <div className="flex justify-end">
          <Button type="submit" endIcon={<RightIcon />}>
            Register
          </Button>
        </div>
      </Form>

      <style jsx>{`
        .form-control {
          display: flex;
          flex-direction: column;
          margin: 2rem 0;
        }
      `}</style>
    </div>
  );
};

export default SignUp;
