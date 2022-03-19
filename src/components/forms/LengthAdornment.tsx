import clsx from "clsx";

interface InputLengthProps {
  maxLength: number;
  value?: string;
  className?: string;
}

export default function LengthAdornment({
  value = "",
  maxLength,
  className,
}: InputLengthProps) {
  return (
    <span
      className={clsx(className, "flex flex-row gap-1 text-slate-500 text-sm")}
    >
      <>
        <span>{value.length}</span>/<span>{maxLength}</span>
      </>
    </span>
  );
}
