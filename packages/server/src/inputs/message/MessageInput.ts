import { Field, InputType } from "type-graphql";

@InputType()
export class MessageInput {
  @Field()
  text: string;
}
