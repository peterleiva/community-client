import { ComponentProps } from "react";
import { type RegisterOptions, useFormContext } from "react-hook-form";
import TextInput from "./TextInput";
import LengthAdornment from "./LengthAdornment";
import BaseField, { type BaseFieldProps } from "./Field";
import clsx from "clsx";

type TextFieldProps = BaseFieldProps<
  Omit<ComponentProps<typeof TextInput>, "register"> & {
    registerOptions?: RegisterOptions;
    showLength?: boolean;
  }
>;

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
      errors={errors}
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
