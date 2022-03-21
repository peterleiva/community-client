import clsx from "clsx";

type LabelProps = JSX.IntrinsicElements["label"] & {
  required?: boolean;
};

export default function Label({
  required,
  children,
  className,
  ...labelProps
}: LabelProps) {
  return (
    <label
      className={clsx(
        {
          "after:content-['*'] after:text-red-500 after:ml-1 after:font-bold":
            required,
        },
        className
      )}
      {...labelProps}
    >
      {children}
    </label>
  );
}
