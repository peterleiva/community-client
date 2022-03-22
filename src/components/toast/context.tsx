import { createContext, useContext } from "react";
import invariant from "invariant";
import useNotifier from "./notifier-reducer";
import Snackbar from "./Snackbar";

const ToastContext = createContext<ReturnType<typeof useNotifier> | null>(null);

type ToastContextProps = {
  children: React.ReactNode;
};

export function ToastProvider({ children }: ToastContextProps) {
  const notifier = useNotifier();

  return (
    <ToastContext.Provider value={notifier}>
      <Snackbar />
      {children}
    </ToastContext.Provider>
  );
}

export function useToast() {
  const context = useContext(ToastContext);

  invariant(context, "Incorrect usage of useToast. Missing ToastProvider");

  return context;
}
