import type { IconType } from "react-icons";
import { applyClasses } from "lib";
import styles from "./Button.module.scss";

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
  const css = applyClasses(className, styles.button);
  return renderContainer({
    className: css,
    children: (
      <span className={css}>
        {Icon && <Icon />}
        {children}
      </span>
    ),
  });
}
