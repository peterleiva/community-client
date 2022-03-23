import { ComponentProps } from "react";
import {
  FieldErrors,
  type RegisterOptions,
  useFormContext,
} from "react-hook-form";
import Label from "./Label";
import TextInput from "./TextInput";
import { ErrorMessage } from "@hookform/error-message";
import LengthAdornment from "./LengthAdornment";
import clsx from "clsx";

type BaseFieldProps = {
  name: string;
  label?: string;
  required?: boolean;
  renderInput: JSX.Element;
  errors?: FieldErrors;
};
function BaseField({
  name,
  label,
  required,
  renderInput,
  errors = {},
}: BaseFieldProps) {
  return (
    <div className="flex flex-col mx-3">
      <Label htmlFor={name} required={required}>
        {label}
      </Label>
      {renderInput}
      <Errors name={name} errors={errors} />
    </div>
  );
}

type TextFieldProps = Omit<ComponentProps<typeof TextInput>, "register"> &
  Omit<BaseFieldProps, "renderInput" | "errors"> & {
    registerOptions?: RegisterOptions;
    showLength?: boolean;
  };

export default function TextField({
  name,
  label,
  registerOptions = {},
  required,
  max,
  min,
  maxLength,
  minLength,
  showLength,
  value,
  ...inputProps
}: TextFieldProps) {
  const { disabled, onBlur, onChange } = inputProps;

  const {
    formState: { errors },
    register,
    watch,
  } = useFormContext();

  return (
    <BaseField
      label={label}
      required={required}
      name={name}
      renderInput={
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
          endDecoration={
            <>
              <LengthField
                show={showLength}
                maxLength={maxLength}
                value={watch(name)}
              />
              {inputProps?.endDecoration}
            </>
          }
          {...inputProps}
        />
      }
    />
  );
}

type LengthFieldProps = {
  value?: string;
  maxLength?: number;
  show?: boolean;
};

const LengthField = ({ value, maxLength, show }: LengthFieldProps) => {
  if (!show) return null;

  return (
    <LengthAdornment
      value={value}
      maxLength={maxLength}
      className={clsx({
        "text-red-500": maxLength && value && value.length > maxLength,
      })}
      classesStart={clsx({
        "text-blue-300 font-semibold":
          value &&
          value.length > 0 &&
          (!maxLength || value.length <= maxLength),
      })}
    />
  );
};

const Errors = ({ errors, name }: { name: string; errors: FieldErrors }) => {
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
