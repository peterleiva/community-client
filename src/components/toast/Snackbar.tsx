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
      className={clsx(
        "fixed z-50 w-screen overflow-x-hidden overflow-y-visible",
        positioning[position]
      )}
    >
      <ul className={clsx("flex flex-col-reverse gap-4 w-[80vw]")}>
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
  bottom: "bottom-4",
  // "bottom-right": "bottom-4 right-10 flex-col-reverse",
};
