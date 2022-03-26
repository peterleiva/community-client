import { useToggle } from "lib";
import TextInput, { InputAdornment } from "./TextInput";
import {
  RiEyeLine as ShowIcon,
  RiEyeOffLine as HideIcon,
} from "react-icons/ri";
import { IconButton } from "components/Button";

type PasswordInputProps = ElementProps<typeof TextInput> & {
  position?: "right" | "left";
  show?: boolean;
  hideAdornment?: boolean;
};

export default function PasswordInput({
  show = false,
  position = "right",
  hideAdornment,
  ...props
}: PasswordInputProps) {
  const { hidden, toggle } = useToggle(show);

  const adornment = (
    <PasswordAdornment hide={hideAdornment} active={!hidden} onTap={toggle} />
  );

  const decorationProps = {
    startDecoration: (
      <InputAdornment>
        {props?.startDecoration}
        {position === "left" && adornment}
      </InputAdornment>
    ),
    endDecoration: (
      <InputAdornment>
        {position === "right" && adornment}
        {props?.endDecoration}
      </InputAdornment>
    ),
  };

  return (
    <TextInput
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

export function PasswordAdornment({ hide, onTap, active }: AdornmentProps) {
  if (hide) return null;

  const Icon = active ? HideIcon : ShowIcon;

  return (
    <IconButton onTap={onTap}>
      <Icon />
    </IconButton>
  );
}
