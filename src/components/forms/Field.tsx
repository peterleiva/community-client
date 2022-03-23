import { ErrorMessage } from "@hookform/error-message";
import { type FieldErrors } from "react-hook-form";
import Label from "./Label";

type FieldProps = {
  name: string;
  label?: string;
  required?: boolean;
  errors: FieldErrors;
  renderInput: JSX.Element;
};

export type BaseFieldProps<TProps> = Omit<
  FieldProps,
  "errors" | "renderInput"
> &
  TProps;

export default function Field({
  name,
  label,
  required,
  renderInput,
  errors = {},
}: FieldProps) {
  return (
    <div className="flex flex-col">
      <Label htmlFor={name} required={required}>
        {label}
      </Label>
      {renderInput}
      <Errors name={name} errors={errors} />
    </div>
  );
}

type ErrorProps = {
  name: string;
  errors: FieldErrors;
};

function Errors({ errors, name }: ErrorProps) {
  return (
    <ErrorMessage
      name={name}
      errors={errors}
      render={({ messages }) =>
        messages &&
        Object.entries(messages).map(([type, message]) => (
          <p key={type} className="text-red-500">
            {message}
          </p>
        ))
      }
    />
  );
}
