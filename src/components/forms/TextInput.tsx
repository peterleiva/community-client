import { useCallback } from "react";
import type { Maybe } from "types";
import { FiAlertCircle as ErrorIcon } from "react-icons/fi";
import clsx from "clsx";
import useFocus from "./useFocus";

type InputProps = JSX.IntrinsicElements["input"] & {
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
  type = "text",
  disabled,
  helperText,
  error,
  startDecoration = null,
  endDecoration = null,
  className,
  ...props
}: InputProps) {
  const { focused, ref } = useFocus<HTMLInputElement>();

  const StartAdornment = useCallback(
    () => (error ? <ErrorIcon /> : startDecoration),
    [error, startDecoration]
  );

  const EndAdornment = useCallback(() => endDecoration, [endDecoration]);

  return (
    <div className={clsx(className, "inline-flex flex-col")}>
      <div
        className={clsx(
          "flex flex-row flex-nowrap gap-2 items-center relative rounded-md border border-slate-300 bg-gray-50 p-2",
          { "bg-gray-300 text-zinc-300": disabled },
          { "hover:border-slate-400 border-slate-400": focused }
        )}
      >
        <StartAdornment />
        <input
          type={type}
          ref={ref}
          className={clsx(
            "bg-transparent placeholder-slate-400 outline-none bg-none grow"
          )}
          disabled={disabled}
          {...props}
        />
        <EndAdornment />
      </div>
      <HelperText text={helperText} />
    </div>
  );
}

const HelperText = ({ text }: { text?: string }) => {
  if (!text) return null;

  return <small className="m-4 text-xs text-slate-500">{text}</small>;
};
