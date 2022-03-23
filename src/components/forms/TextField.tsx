import { ComponentProps } from "react";
import {
  FieldErrors,
  type RegisterOptions,
  useFormContext,
} from "react-hook-form";
import Label from "./Label";
import TextInput from "./TextInput";
import { ErrorMessage } from "@hookform/error-message";

type TextFieldProps = Omit<ComponentProps<typeof TextInput>, "register"> & {
  name: string;
  label?: string;
  registerOptions?: RegisterOptions;
};

export default function TextField({
  name,
  label,
  registerOptions = {},
  required,
  max,
  maxLength,
  min,
  minLength,
  value,
  ...inputProps
}: TextFieldProps) {
  const { disabled, onBlur, onChange } = inputProps;

  const {
    formState: { errors },
    register,
  } = useFormContext();

  return (
    <div className="flex flex-col mx-3">
      <Label htmlFor={name} required={required}>
        {label}
      </Label>
      <TextInput
        id={name}
        error={errors[name]}
        register={register(name, {
          required: `${name} is required`,
          max,
          maxLength,
          min,
          minLength,
          disabled,
          onBlur,
          onChange,
          value,
          ...registerOptions,
        })}
        {...inputProps}
      />
      <Errors name={name} errors={errors} />
    </div>
  );
}

const Errors = ({ errors, name }: { name: string; errors: FieldErrors }) => {
  console.log("errors", errors);

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
};
