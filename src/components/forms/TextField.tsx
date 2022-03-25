import { type RegisterOptions, useFormContext } from "react-hook-form";
import TextInput from "./TextInput";
import PasswordInput from "./PasswordInput";
import LengthAdornment from "./LengthAdornment";
import BaseField, { type BaseFieldProps } from "./Field";
import { IconButton } from "components/Button";
import { GrClose as CloseIcon } from "react-icons/gr";
import clsx from "clsx";

type TextFieldProps = BaseFieldProps<
  Omit<React.ComponentProps<typeof TextInput>, "register"> & {
    registerOptions?: RegisterOptions;
    showLength?: boolean;
  }
>;

type WithTextFieldProps = BaseFieldProps<ElementProps<typeof TextInput>> & {
  registerOptions?: RegisterOptions;
  showLength?: boolean;
};

function WithTextField(
  Input: React.ComponentType<typeof TextInput> = TextInput
) {
  return function TextField({
    name,
    label,
    required,
    max,
    maxLength,
    min,
    minLength,
    registerOptions,
    showLength,
    ...inputProps
  }: TextFieldProps) {
    const { disabled, onBlur, onChange } = inputProps;
    const {
      resetField,
      formState: { errors },
      register,
      watch,
    } = useFormContext();

    const value = watch(name);

    return (
      <BaseField
        label={label}
        required={required}
        name={name}
        errors={errors}
        renderInput={
          <Input
            id={name}
            error={errors[name]}
            register={register(name, {
              required,
              max,
              maxLength,
              min,
              minLength,
              disabled,
              onBlur,
              onChange,
              ...registerOptions,
            })}
            endDecoration={
              <span className="flex gap-4">
                <LengthFieldAdornment
                  show={showLength}
                  maxLength={maxLength}
                  value={value}
                />
                {inputProps?.endDecoration}
                {value && value.length >= 0 && (
                  <ResetButton onReset={() => resetField(name)} />
                )}
              </span>
            }
            {...inputProps}
          />
        }
      />
    );
  };
}

const ResetButton = ({ onReset }: { onReset: () => void }) => (
  <IconButton onClick={onReset}>
    <CloseIcon />
  </IconButton>
);

export const TextField = WithTextField();
export const PasswordField = WithTextField(PasswordInput);

type LengthFieldProps = {
  value?: string;
  maxLength?: number;
  show?: boolean;
};

const LengthFieldAdornment = ({ value, maxLength, show }: LengthFieldProps) => {
  if (!show) return null;

  return (
    <LengthAdornment
      value={value}
      maxLength={maxLength}
      classesEnd={clsx({
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
