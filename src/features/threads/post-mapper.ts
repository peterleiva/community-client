import type { Node } from "types";
import type { Post } from "./types";
import { fromISODate, mapperDTO } from "lib/mapper";
import { UserMapper, UserDTO } from "lib/user-mapper";

export interface PostDTO extends Node {
  message?: string;
  likes: number;
  author: UserDTO;
}

export class PostMapper implements mapperDTO<PostDTO, Post> {
  toObject(data: PostDTO): Post {
    const { author, createdAt, updatedAt, ...post } = data;
    const userMapper = new UserMapper();

    return {
      ...post,
      author: userMapper.toObject(author),
      createdAt: fromISODate(createdAt),
      updatedAt: fromISODate(updatedAt),
    };
  }
}
