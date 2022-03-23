import { useCallback } from "react";
import type { Maybe } from "types";
import { type UseFormRegisterReturn } from "react-hook-form";
import { FiAlertCircle as ErrorIcon } from "react-icons/fi";
import clsx from "clsx";
import useFocus from "./useFocus";

type InputProps = React.ComponentPropsWithoutRef<"input"> & {
  /**
   * Register form with react-hook-form
   */
  register?: UseFormRegisterReturn;
  /**
   * text with more information about the input
   */
  helperText?: string;
  /**
   * indicates is a input error
   */
  error?: boolean;
  /**
   * decorates the head of the input, usually an icon
   */
  startDecoration?: Maybe<JSX.Element>;
  /**
   * decorates the tip of the input, usually an icon
   */
  endDecoration?: Maybe<JSX.Element>;
};

export default function TextInput({
  helperText,
  error,
  startDecoration = null,
  endDecoration = null,
  className,
  register,
  onFocus,
  ...props
}: InputProps) {
  const { focused, focus, unfocus } = useFocus();
  const { disabled } = props;

  const StartAdornment = useCallback(
    () => (
      <>
        {error && <ErrorIcon className="text-red-500" />}
        {startDecoration}
      </>
    ),
    [error, startDecoration]
  );

  const EndAdornment = useCallback(() => endDecoration, [endDecoration]);

  return (
    <div className={clsx(className, "inline-flex flex-col")}>
      <div
        className={clsx(
          "flex flex-row flex-nowrap gap-2 items-center relative rounded-md border border-slate-300 bg-gray-50 p-2",
          { "bg-gray-300 text-zinc-300": disabled },
          { "border-slate-400": focused },
          { "border-red-500": error }
        )}
      >
        <StartAdornment />
        <input
          className="bg-transparent placeholder-slate-400 outline-none bg-none grow"
          {...props}
          {...register}
          onFocus={e => {
            focus();
            onFocus?.(e);
          }}
          onBlur={e => {
            unfocus();
            register?.onBlur(e);
          }}
        />
        <EndAdornment />
      </div>
      <HelperText text={helperText} />
    </div>
  );
}

const HelperText = ({ text }: { text?: string }) => {
  if (!text) return null;

  return <small className="ml-2 text-xs text-slate-500">{text}</small>;
};
