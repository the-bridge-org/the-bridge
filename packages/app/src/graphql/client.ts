import ApolloClient from "apollo-boost";

let accessToken: string | undefined;

export const setAccessToken = (token: string) => {
  accessToken = token;
};

export const client = new ApolloClient({
  uri: process.env.REACT_APP_SERVER_BASE_URL || "http://localhost:4000",
  credentials: "include",
  request: operation => {
    if (!accessToken) {
      return;
    }

    operation.setContext({
      headers: {
        Authorization: accessToken,
      },
    });
  },
});
