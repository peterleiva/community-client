import { Connection, Node, User } from "types";
import type { Thread } from "./types";
import { DateTime } from "luxon";
import { fromISODate, mapperDTO } from "lib/mapper";
import { PostMapper, PostDTO } from "./post-mapper";
import { UserMapper, UserDTO } from "lib/user-mapper";

export type ThreadConnection = Connection<ThreadDTO>;

interface ParticipantsConnection extends Connection<UserDTO> {
  interactions: number;
}

export interface ThreadDTO extends Node {
  title: string;
  replies: number;
  post: PostDTO;
  lastActivity: string;
  participants: ParticipantsConnection;
}

export class ThreadMapper implements mapperDTO<ThreadDTO, Thread> {
  toObject(data: ThreadDTO): Thread {
    const userMapper = new UserMapper();
    const postMapper = new PostMapper();

    const { createdAt, updatedAt, lastActivity, ...thread } = data;

    const post = postMapper.toObject(data.post);
    const participants = data.participants.edges.map(({ node: user }) =>
      userMapper.toObject(user)
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
}
