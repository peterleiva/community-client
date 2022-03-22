import { type NextPage } from "next";
import { Label, TextInput, PasswordInput } from "components/forms";
import Button from "components/Button";
import { useToast } from "components/toast";
import { BsArrowRight as RightIcon } from "react-icons/bs";
import { useEffect } from "react";

const SignUp: NextPage = () => {
  const { dispatch } = useToast();

  const notify = () => {
    console.log("notify");
    dispatch({ type: "NOTIFY", payload: { title: "Test" } });
  };

  useEffect(() => {
    dispatch({ type: "NOTIFY", payload: { title: "Test", theme: "warning" } });
  }, []);

  return (
    <div className="w-3/4 mx-auto">
      <h1>Sign Up</h1>
      <form>
        <div className="form-control">
          <Label htmlFor="email" required>
            Email
          </Label>
          <TextInput name="email" id="email" />
        </div>

        <div className="form-control">
          <Label htmlFor="password">Password</Label>
          <PasswordInput
            name="password"
            id="password"
            autoComplete="current-password"
          />
        </div>
        <button
          onClick={e => {
            e.preventDefault();
            notify();
          }}
        >
          clicagem
        </button>

        <div className="flex justify-end">
          <Button
            endIcon={<RightIcon />}
            onClick={() => {
              console.log("register clicked");
              notify();
            }}
          >
            Register
          </Button>
        </div>
      </form>

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
