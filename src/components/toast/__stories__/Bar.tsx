import Button from "components/Button";
import { useToast } from "../context";

export default function Bar() {
  const { dispatch } = useToast();
  const notify = () =>
    dispatch({
      type: "NOTIFY",
      payload: {
        theme: "info",
        title: "New Notification",
      },
    });

  return (
    <Button variant="outlined" size="sm" onClick={notify}>
      Notify
    </Button>
  );
}
