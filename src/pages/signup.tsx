import { type NextPage } from "next";
import { Label, TextInput, PasswordInput, Form } from "components/forms";
import Button from "components/Button";
import { useToast } from "components/toast";
import { BsArrowRight as RightIcon } from "react-icons/bs";
import { type SubmitHandler } from "react-hook-form";

type FormData = {
  email: string;
  password: string;
};

const Errors = ({ error }: { error?: string }) => {
  return <p className="text-red-500">{error}</p>;
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
      <Form<FormData> onSubmit={submission}>
        {({ register, formState: { errors } }) => (
          <>
            <div className="form-control">
              <Label htmlFor="email" required>
                Email
              </Label>
              <TextInput
                id="email"
                error={!!errors.email}
                register={register("email", { required: "email is required" })}
              />
              <Errors error={errors.email?.message} />
            </div>
            <div className="form-control">
              <Label htmlFor="password" required>
                Password
              </Label>
              <PasswordInput
                id="password"
                error={!!errors.password}
                autoComplete="current-password"
                register={register("password", {
                  required: "password is required",
                })}
              />
              <Errors error={errors.password?.message} />
            </div>
            <div className="flex justify-end">
              <Button type="submit" endIcon={<RightIcon />}>
                Register
              </Button>
            </div>
          </>
        )}
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
