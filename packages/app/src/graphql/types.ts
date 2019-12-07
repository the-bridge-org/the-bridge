export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type LoginInput = {
  username: Scalars["String"];
  password: Scalars["String"];
};

export type Message = {
  __typename?: "Message";
  id: Scalars["String"];
  text: Scalars["String"];
  createdAt: Scalars["Int"];
};

export type MessageInput = {
  text: Scalars["String"];
};

export type Mutation = {
  __typename?: "Mutation";
  createMessage: Message;
  register: User;
  login: User;
};

export type MutationCreateMessageArgs = {
  payload: MessageInput;
};

export type MutationRegisterArgs = {
  payload: RegisterInput;
};

export type MutationLoginArgs = {
  payload: LoginInput;
};

export type Query = {
  __typename?: "Query";
  messages: Array<Message>;
  ping: Scalars["String"];
};

export type RegisterInput = {
  username: Scalars["String"];
  phoneNumber: Scalars["String"];
  password: Scalars["String"];
};

export type Relationship = {
  __typename?: "Relationship";
  id: Scalars["ID"];
  user1: User;
  user2: User;
};

export type Subscription = {
  __typename?: "Subscription";
  newMessage: Message;
};

export type SubscriptionNewMessageArgs = {
  topic: Scalars["String"];
};

export type User = {
  __typename?: "User";
  id: Scalars["ID"];
  username: Scalars["String"];
  phoneNumber: Scalars["String"];
  token?: Maybe<Scalars["String"]>;
  relationship?: Maybe<Relationship>;
  createdAt: Scalars["Int"];
  updatedAt: Scalars["Int"];
};
