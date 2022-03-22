import { useToggle } from "lib";

export default function useFocus() {
  const { show: focused, turnOn: focus, turnOff: unfocus } = useToggle();

  return { focused, focus, unfocus };
}
