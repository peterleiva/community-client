import { Connection, Node } from "types";
import type { Thread } from "./types";
import { DateTime } from "luxon";
import { fromISODate } from "lib/mapper";
import postMap, { PostDTO } from "./post-mapper";
import { userMap, UserDTO } from "lib/user-mapper";

export interface ThreadConnection extends Connection<ThreadDTO> {
  total: number;
}

export interface ThreadDTO extends Node {
  title: string;
  replies: number;
  post: PostDTO;
  lastActivity: string;
  participants: ParticipantsConnection;
}

interface ParticipantsConnection extends Connection<UserDTO> {
  interactions: number;
}

export default function threadMap(data: ThreadDTO): Thread {
  const { createdAt, updatedAt, lastActivity, ...thread } = data;

  const post = postMap(data.post);
  const participants = data.participants.edges.map(({ node: user }) =>
    userMap(user)
  );

  return {
    ...thread,
    post,
    participants,
    activity: DateTime.fromISO(lastActivity),
    createdAt: fromISODate(createdAt),
    updatedAt: fromISODate(updatedAt),
  };
}
