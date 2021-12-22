import type { IconType } from "react-icons";
import styles from "./Button.module.scss";

interface ButtonProps extends React.ComponentPropsWithoutRef<"button"> {
  Icon?: IconType;
}

export default function Button({
  Icon,
  children,
  ...buttonProps
}: ButtonProps) {
  return (
    <button className={styles.button} {...buttonProps}>
      {Icon && <Icon />}
      {children}
    </button>
  );
}
