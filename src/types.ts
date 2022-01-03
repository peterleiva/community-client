import { DateTime } from "luxon";

export type Image = string;
export type ID = string;

export type Cursor = string;

export type Connection<T extends Node> = {
  edges: EdgeConnection<T>;
  pageInfo: PageInfo;
};

export type PageInfo = {
  startCursor: Cursor;
  endCursor: Cursor;
  hasNextPage: boolean;
  hasPreviousPage: boolean;
};

export type EdgeConnection<T extends Node> = Edge<T>[];

export type Edge<T extends Node> = {
  node: T;
  cursor?: Cursor;
};

export type Node = {
  id: ID;
  createdAt?: string;
  updatedAt?: string;
};

export interface Timestamps {
  createdAt?: DateTime;
  updatedAt?: DateTime;
}

export interface User extends Timestamps {
  id: ID;
  avatar?: Image;
  username: string;
}
