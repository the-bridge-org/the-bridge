import { useMutation } from "@apollo/react-hooks";
import gql from "graphql-tag";
import { Mutation, MutationLoginArgs } from "./types";

const LOGIN_MUTATION = gql`
  mutation($payload: LoginInput!) {
    login(payload: $payload) {
      id
      username
      phoneNumber
      token
    }
  }
`;

export const useLoginMutation = (variables?: MutationLoginArgs) =>
  useMutation<Mutation, MutationLoginArgs>(LOGIN_MUTATION, { variables });
