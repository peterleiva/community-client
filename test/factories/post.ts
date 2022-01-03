import { Factory } from "fishery";
import { Post } from "features/threads";
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
