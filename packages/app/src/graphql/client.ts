import { ApolloClient, HttpLink, InMemoryCache, split } from "apollo-boost";
import { setContext } from "apollo-link-context";
import { WebSocketLink } from "apollo-link-ws";
import { getMainDefinition } from "apollo-utilities";

let accessToken: string | undefined;

export const setAccessToken = (token: string) => {
  accessToken = token;
};

const authLink = setContext((_, { headers }) => {
  return {
    headers: {
      ...headers,
      authorization: accessToken ? accessToken : "",
    },
  };
});

const httpLink = new HttpLink({
  uri: process.env.REACT_APP_SERVER_BASE_URL || "http://localhost:4000",
  credentials: "include",
});

const wsLink = new WebSocketLink({
  uri: `ws://localhost:4000/graphql`,
  options: {
    reconnect: true,
  },
});

const link = split(
  ({ query }) => {
    const definition = getMainDefinition(query);
    return (
      definition.kind === "OperationDefinition" &&
      definition.operation === "subscription"
    );
  },
  wsLink,
  httpLink
);

export const client = new ApolloClient({
  link: authLink.concat(link),
  cache: new InMemoryCache(),
});
