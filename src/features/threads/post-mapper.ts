import type { Node } from "types";
import type { Post } from "./types";
import { fromISODate } from "lib/mapper";
import { userMap, UserDTO } from "lib/user-mapper";

export interface PostDTO extends Node {
  message?: string;
  likes: number;
  author: UserDTO;
}

export default function postMap(data: PostDTO): Post {
  const { author, createdAt, updatedAt, ...post } = data;

  return {
    ...post,
    author: userMap(author),
    createdAt: fromISODate(createdAt),
    updatedAt: fromISODate(updatedAt),
  };
}
