import { useToggle } from "lib";
import { useEffect, useRef } from "react";

export default function useFocus<T extends HTMLElement>() {
  const focusRef = useRef<T | null>(null);
  const { show: focused, turnOn: focus, turnOff: unfocus } = useToggle();

  useEffect(() => {
    focusRef.current?.addEventListener("focusout", () => {
      unfocus();
    });

    focusRef.current?.addEventListener("focusin", () => {
      focus();
    });
  }, [focus, unfocus]);

  return {
    focused,
    ref: focusRef,
  };
}
