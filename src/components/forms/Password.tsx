import { useToggle } from "lib";
import Input from "./Input";
import {
  RiEyeLine as ShowIcon,
  RiEyeOffLine as HideIcon,
} from "react-icons/ri";

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
  const { hide, toggle } = useToggle(show);

  const [type, Icon] = hide ? ["password", ShowIcon] : ["text", HideIcon];

  const Decoration = () => {
    if (hideAdornment) return null;

    return (
      <button className="flex" onClick={() => toggle()}>
        <Icon />
      </button>
    );
  };

  const decorationProps = {
    startDecoration: position === "left" ? <Decoration /> : null,
    endDecoration: position === "right" ? <Decoration /> : null,
  };

  return <Input type={type} {...props} {...decorationProps} />;
}
