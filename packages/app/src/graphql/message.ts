import { useMutation, useQuery, useSubscription } from "@apollo/react-hooks";
import gql from "graphql-tag";
import { Message, Mutation, MutationCreateMessageArgs, Query } from "./types";

const MESSAGES_QUERY = gql`
  {
    messages {
      id
      text
      createdAt
    }
  }
`;

const CREATE_MESSAGE_MUTATION = gql`
  mutation($payload: CreateMessageInput!) {
    createMessage(payload: $payload) {
      id
      text
    }
  }
`;

export const NEW_MESSAGE_SUBSCRIPTION = gql`
  subscription($topic: String!) {
    newMessage(topic: $topic) {
      id
      text
      createdAt
    }
  }
`;

export const useMessagesQuery = () => useQuery<Query>(MESSAGES_QUERY);
export const useCreateMessageMutation = (
  variables?: MutationCreateMessageArgs
) =>
  useMutation<Mutation, MutationCreateMessageArgs>(CREATE_MESSAGE_MUTATION, {
    variables,
  });
export const useNewMessageSubscription = (topic: string) =>
  useSubscription<Message>(NEW_MESSAGE_SUBSCRIPTION, { variables: { topic } });
