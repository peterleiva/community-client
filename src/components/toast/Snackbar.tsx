import Toast from "./Toast";
import { useToast } from "./context";
import clsx from "clsx";

// TODO: reverse, positioning
interface ToastStackProps {
  /**
   * @default "top"
   */
  position?: keyof typeof positioning;
  reverse?: boolean;
}

export default function Snackbar({ position = "bottom" }: ToastStackProps) {
  const { messages, dispatch } = useToast();

  return (
    <div
      className={clsx("absolute z-50 overflow-hidden", positioning[position])}
    >
      <ul className={clsx("flex flex-col gap-4")}>
        {messages.map(({ id, ...message }) => (
          <li key={id}>
            <Toast
              {...message}
              onClose={() => dispatch({ type: "CLOSE", id })}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

const positioning = {
  bottom: "bottom-4 left-1/2",
  // "bottom-right": "bottom-4 right-10 flex-col-reverse",
};
