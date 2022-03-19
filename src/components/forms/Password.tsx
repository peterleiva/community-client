import { useToggle } from "lib";
import Input from "./Input";
import {
  RiEyeLine as ShowIcon,
  RiEyeOffLine as HideIcon,
} from "react-icons/ri";
import { IconButton } from "components/Button";

type PasswordProps = Omit<
  React.ComponentProps<typeof Input>,
  "startDecoration" | "endDecoration"
> & {
  position?: "right" | "left";
  show?: boolean;
  hideAdornment?: boolean;
};

export default function Password({
  show = false,
  position = "right",
  hideAdornment,
  ...props
}: PasswordProps) {
  const { hidden, toggle } = useToggle(show);

  const adornment = (
    <Adornment hide={hideAdornment} active={!hidden} onTap={toggle} />
  );

  const decorationProps = {
    startDecoration: position === "left" ? adornment : null,
    endDecoration: position === "right" ? adornment : null,
  };

  return (
    <Input
      type={hidden ? "password" : "text"}
      {...props}
      {...decorationProps}
    />
  );
}

interface AdornmentProps {
  hide?: boolean;
  onTap?: () => void;
  active?: boolean;
}

function Adornment({ hide, onTap, active }: AdornmentProps) {
  if (hide) return null;

  const Icon = active ? HideIcon : ShowIcon;

  return (
    <IconButton className="flex" onTap={onTap}>
      <Icon />
    </IconButton>
  );
}
