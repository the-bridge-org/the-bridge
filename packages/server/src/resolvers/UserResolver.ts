import * as bcrypt from "bcryptjs";
import { Response } from "express";
import { GraphQLError } from "graphql";
import { Arg, Ctx, Mutation, Resolver } from "type-graphql";
import { ModelNotFoundError } from "../errors/ModelNotFoundError";
import { LoginInput } from "../inputs/user/LoginInput";
import { RegisterInput } from "../inputs/user/RegisterInput";
import { User } from "../models/User";
import { IContext } from "../services/middlewares";
import {
  REFRESH_EXPIRE,
  signAccessToken,
  signRefreshToken,
} from "../services/token";

// Cookie max age has js time unit
const COOKIE_MAX_AGE = REFRESH_EXPIRE * 1000;

@Resolver()
export class UserResolver {
  @Mutation(() => User)
  public async register(
    @Arg("payload")
    { username, phoneNumber, password }: RegisterInput,
    @Ctx() { res }: IContext
  ) {
    const userExists = await User.findOne({
      where: [{ username }, { phoneNumber }],
    });

    // TODO: Move existent test to validator
    if (userExists) {
      throw new GraphQLError("Username or phone number is been taken");
    }

    const user = new User();
    user.username = username;
    user.phoneNumber = phoneNumber;
    user.password = bcrypt.hashSync(password);

    await user.save();

    user.token = signAccessToken(user);
    this.setCookie(res, signRefreshToken(user));

    return user;
  }

  @Mutation(() => User)
  public async login(
    @Arg("payload") { username, password }: LoginInput,
    @Ctx() { res }: IContext
  ) {
    const user = await User.findOne({ where: { username } });

    if (!user) {
      throw new ModelNotFoundError();
    }

    if (!bcrypt.compareSync(password, user.password)) {
      throw new ModelNotFoundError();
    }

    user.token = signAccessToken(user);
    this.setCookie(res, signRefreshToken(user));

    return user;
  }

  private setCookie(res: Response, token?: string) {
    res.cookie("token", token, {
      httpOnly: true,
      maxAge: COOKIE_MAX_AGE,
    });
  }
}
