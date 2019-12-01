import * as jwt from "jsonwebtoken";
import { config } from "../config";
import { User } from "../models/User";

export const REFRESH_EXPIRE = config.jwt.refreshExpire;
export const ACCESS_EXPIRE = config.jwt.accessExpire;

export interface ITokenPayload {
  id: string;
  refresh: boolean;
  exp: number;
}

const JWT_SECRET = config.jwt.secret;

export const signToken = (user: User, refresh: boolean) => {
  if (!user.id) {
    return undefined;
  }

  return jwt.sign(
    {
      id: user.id,
      refresh,
      exp: REFRESH_EXPIRE + ((Date.now() / 1000) | 0),
    } as ITokenPayload,
    JWT_SECRET
  );
};

export const signRefreshToken = (user: User) => {
  return signToken(user, true);
};

export const signAccessToken = (user: User) => {
  return signToken(user, false);
};

export const decodeToken = (token: string) => {
  return jwt.decode(token) as ITokenPayload;
};

export const verifyAndDecodeToken = (token: string) => {
  return jwt.verify(token, JWT_SECRET) as ITokenPayload;
};
