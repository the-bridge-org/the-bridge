import React, { useEffect } from "react";
import { useLoginMutation } from "../graphql/auth";
import { setAccessToken } from "../graphql/client";

/** Development Password */
const password = "password";

export const DevPrepare: React.FC = () => {
  const [login] = useLoginMutation();
  useEffect(() => {
    const username = sessionStorage.getItem("loggedInAs");

    if (!username) {
      return;
    }

    login({ variables: { payload: { username, password } } }).then(res => {
      if (!res.data || !res.data.login) {
        return;
      }

      const { token } = res.data.login;

      if (!token) {
        return;
      }

      setAccessToken(token);
    });
  }, [login]);

  return <></>;
};
