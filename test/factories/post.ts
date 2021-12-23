import { Factory } from "fishery";
import { Post } from "types";
import casual from "casual";
import UserFactory from "./user";

export default Factory.define<Post>(() => {
  return {
    id: casual.uuid,
    message: casual.description,
    author: UserFactory.build(),
    likes: casual.integer(),
  };
});
