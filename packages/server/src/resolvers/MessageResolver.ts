import {
  Arg,
  Ctx,
  Mutation,
  PubSub,
  PubSubEngine,
  Query,
  Resolver,
  Root,
  Subscription,
} from "type-graphql";
import { ModelNotFoundError } from "../errors/ModelNotFoundError";
import { MessageInput } from "../inputs/message/MessageInput";
import { Message } from "../models/Message";
import { User } from "../models/User";
import { IContext } from "../services/middlewares";

interface IMessagePubSubPayload {
  message: Message;
  userIds: string[];
}

@Resolver()
export class MessageResolver {
  @Query(() => [Message])
  public async messages(@Ctx() { userId }: IContext) {
    if (!userId) {
      throw new ModelNotFoundError("User not found");
    }

    const user = await User.findOneOrFail(userId);
    const relationship = await user.relationship;
    if (!relationship) {
      throw new ModelNotFoundError("User relationship not found");
    }
    await relationship.reload();

    return Message.find({
      where: { relationship },
      order: { createdAt: "DESC" },
    });
  }

  @Mutation(() => Message)
  public async createMessage(
    @Arg("payload") { text }: MessageInput,
    @PubSub() pubSub: PubSubEngine,
    @Ctx() { userId }: IContext
  ) {
    if (!userId) {
      throw new ModelNotFoundError("User not found");
    }

    const user = await User.findOneOrFail(userId);
    const relationship = await user.relationship;
    if (!relationship) {
      throw new ModelNotFoundError("User relationship not found");
    }
    await relationship.reload();

    const message = new Message();
    message.text = text;
    message.relationship = relationship;
    await message.save();

    const userIds = [relationship.user1.id, relationship.user2.id];

    await pubSub.publish(relationship.id, {
      message,
      userIds,
    } as IMessagePubSubPayload);

    return message;
  }

  @Subscription(() => Message, {
    topics: ({ args }) => args.topic,
  })
  public async newMessage(
    @Root() messagePubSubPayload: IMessagePubSubPayload,
    @Arg("topic") _: string,
    @Ctx() { userId }: IContext
  ) {
    if (!userId) {
      throw new ModelNotFoundError("User not found");
    }

    if (!messagePubSubPayload.userIds.includes(userId)) {
      throw new ModelNotFoundError("Unauthorized message subscribtion");
    }

    return messagePubSubPayload.message;
  }
}
