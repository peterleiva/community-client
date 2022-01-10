import type { Node, User } from "types";
import { fromISODate } from "./mapper";

export interface UserDTO extends Node {
  avatar: string;
  name: {
    first?: string;
    last?: string;
    nick: string;
  };
}

export function userMap(data: UserDTO): User {
  const { name, createdAt, updatedAt, ...user } = data;

  return {
    ...user,
    username: name?.nick,
    createdAt: fromISODate(data.createdAt),
    updatedAt: fromISODate(data.updatedAt),
  };
}
