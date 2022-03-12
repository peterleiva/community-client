import type { IconType } from "react-icons";
import clsx from "clsx";

interface ButtonProps {
  Icon?: IconType;
  renderContainer: (props: ButtonInjectedProps) => JSX.Element;
  className?: string;
  children?: React.ReactNode;
}

interface ButtonInjectedProps {
  className?: string;
  children: React.ReactNode;
}

export default function Button({
  Icon,
  children,
  renderContainer,
  className,
}: ButtonProps): JSX.Element {
  return renderContainer({
    className: clsx(
      className,
      "rounded-lg cursor-pointer flex flex-row flex-nowrap items-center justify-evenly border gap-4 py-4 px-6 border border-solid border-gray-400"
    ),
    children: (
      <span>
        {Icon && <Icon />}
        {children}
      </span>
    ),
  });
}
