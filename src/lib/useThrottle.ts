import { invariant } from "@apollo/client/utilities/globals";
import { useCallback, useEffect, useRef } from "react";

interface ThrottleConfig {
  /**
   * time in miliseconds which func should be called
   */
  wait?: number;
}

export default function useThrottle(
  func: (args?: unknown[]) => unknown,
  { wait = 0 }: ThrottleConfig
) {
  const timeoutId = useRef<NodeJS.Timeout>();

  const createThrottle = useCallback(
    () => setTimeout(func, wait),
    [func, wait]
  );

  const cancel = useCallback(() => {
    invariant(
      timeoutId.current,
      "timeout is not defined. throttle can't be canceld"
    );

    clearTimeout(timeoutId.current);
  }, [timeoutId]);

  useEffect(() => {
    timeoutId.current = createThrottle();

    return cancel;
  }, [createThrottle, cancel]);

  return cancel;
}
