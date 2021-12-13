export type Image = string;
export type ID = string;

export interface Timestamps {
  createdAt: Date;
  updatedAt: Date;
}

export interface User {
  id: ID;
  avatar?: Image;
  username: string;
}

export interface Post extends Timestamps {
  id: ID;
  message?: string;
  author: User;
}

export interface Thread extends Timestamps {
  id: ID;
  title: string;
  op: Post;
  participants: User[];
  activity: Date;
  replies: number;
}
