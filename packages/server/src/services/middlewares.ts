import { ContextFunction } from "apollo-server-core";
import { ExpressContext } from "apollo-server-express/dist/ApolloServer";
import { Request, Response } from "express";
import { AuthChecker } from "type-graphql";
import { decodeToken, verifyAndDecodeToken } from "./token";

export interface IContext {
  req: Request;
  res: Response;
  userId?: string;
}

export const authChecker: AuthChecker<IContext> = ({ context }) => {
  const token = context.req.headers.authorization;
  if (!token) {
    return false;
  }
  verifyAndDecodeToken(token);
  return true;
};

export const context: ContextFunction<ExpressContext, object> = ({
  req,
  res,
}) => {
  const token = (req as Request).headers.authorization;

  let userId;
  if (token) {
    userId = decodeToken(token).id;
  }

  return { userId, req, res } as IContext;
};
