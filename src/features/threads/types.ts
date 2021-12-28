import type { DateTime } from "luxon";
import { ID, Node, User } from "types";

export interface Post {
  id: ID;
  message?: string;
  author: User;
  likes: number;
  createdAt?: DateTime;
  updatedAt?: DateTime;
}

export interface Thread {
  id: ID;
  title: string;
  post: Post;
  participants: User[];
  activity: DateTime;
  replies: number;
  createdAt?: DateTime;
  updatedAt?: DateTime;
}
