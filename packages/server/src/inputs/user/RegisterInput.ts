import { constants } from "@bridge/constant";
import {
  IsAlphanumeric,
  IsPhoneNumber,
  MaxLength,
  MinLength,
} from "class-validator";
import { Field, InputType } from "type-graphql";

@InputType()
export class RegisterInput {
  @Field()
  @IsAlphanumeric()
  @MinLength(constants.validation.username.minLength)
  @MaxLength(constants.validation.username.maxLength)
  username: string;

  @Field()
  @IsPhoneNumber(constants.validation.phoneNumber.region)
  phoneNumber: string;

  @Field()
  @MinLength(constants.validation.password.minLength)
  @MaxLength(constants.validation.password.maxLength)
  password: string;
}
