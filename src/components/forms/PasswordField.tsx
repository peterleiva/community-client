import Field, { type BaseFieldProps } from "./Field";
import PasswordInput from "./PasswordInput";
import { useFormContext } from "react-hook-form";

type PasswordFieldProps = BaseFieldProps<ElementProps<typeof PasswordInput>>;

// export default function PasswordField({ name }: PasswordFieldProps) {
//   const {
//     formState: { errors },
//   } = useFormContext();

//   return <div>PasswordField</div>;
// }
