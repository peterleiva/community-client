import { FiAlertCircle as ErrorIcon } from "react-icons/fi";
import clsx from "clsx";
import type { Maybe } from "generated/graphql";

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

export default function Input({
  helperText,
  error,
  startDecoration,
  endDecoration,
  className,
  ...props
}: InputProps) {
  return (
    <div className={clsx(className)}>
      <div className="flex flex-row items-center">
        <div className="absolute left-7 flex">
          {error ? <ErrorIcon /> : startDecoration}
        </div>
        <input
          className={clsx(
            "disabled:bg-gray-300 focus:border-neutral-600 placeholder-slate-400 outline-none rounded-md border border-slate-300 bg-gray-50 px-6 py-2 input-color:p-0",
            { "pl-9": error || startDecoration },
            { "pr-9": endDecoration }
          )}
          {...props}
        />
        <div className="relative right-7 flex items-center">
          {endDecoration}
        </div>
      </div>
      <small className="m-4 text-xs text-slate-500">{helperText}</small>
    </div>
  );
}
