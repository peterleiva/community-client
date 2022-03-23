import clsx from "clsx";

interface InputLengthProps {
  maxLength?: number;
  value?: string;
  className?: string;
  classesStart?: string;
  classesEnd?: string;
}

export default function LengthAdornment({
  value = "",
  maxLength,
  className,
  classesStart,
  classesEnd,
}: InputLengthProps) {
  return (
    <span
      className={clsx("flex flex-row gap-1 text-slate-500 text-sm", className)}
    >
      <span className={classesStart}>{value.length}</span>
      {maxLength && (
        <>
          <span className={classesEnd}>/</span>
          <span className={classesEnd}>{maxLength}</span>
        </>
      )}
    </span>
  );
}
