import { Factory } from "fishery";
import { User } from "types";
import casual from "casual";

export default Factory.define<User>(() => {
  return {
    id: casual.uuid,
    username: casual.username,
    avatar: "https://picsum.photos/100/100",
  };
});
