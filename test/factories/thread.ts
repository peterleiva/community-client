import { Factory } from "fishery";
import casual from "casual";
import { DateTime } from "luxon";
import { Thread } from "types";
import PostFactory from "./post";
import UserFactory from "./user";

interface TransientParams {
  participants: number;
}

export default Factory.define<Thread, TransientParams>(
  ({ transientParams: { participants = 0 }, associations: { post } }) => {
    return {
      id: casual.uuid,
      title: casual.title,
      post: post ?? PostFactory.build(),
      activity: DateTime.fromSeconds(casual.unix_time),
      replies: casual.integer(),
      participants: UserFactory.buildList(participants),
    };
  }
);
