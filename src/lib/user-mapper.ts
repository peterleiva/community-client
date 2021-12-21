import type { Node, User } from "types";
import { mapperDTO, fromISODate } from "./mapper";

export interface UserDTO extends Node {
  avatar: string;
  name: {
    first?: string;
    last?: string;
    nick: string;
  };
}

export class UserMapper implements mapperDTO<UserDTO, User> {
  toObject(data: UserDTO): User {
    const { name, createdAt, updatedAt, ...user } = data;

    return {
      ...user,
      username: name?.nick,
      createdAt: fromISODate(data.createdAt),
      updatedAt: fromISODate(data.updatedAt),
    };
  }
}
