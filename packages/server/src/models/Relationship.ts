import { Field, ID, ObjectType } from "type-graphql";
import {
  BaseEntity,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { User } from "./User";

@ObjectType()
@Entity()
export class Relationship extends BaseEntity {
  @Field(() => ID)
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Field(() => User)
  @ManyToOne(() => User, { eager: true })
  @JoinColumn()
  user1: User;

  @Field(() => User)
  @ManyToOne(() => User, { eager: true })
  @JoinColumn()
  user2: User;
}
