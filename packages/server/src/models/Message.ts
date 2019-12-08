import { Field, Int, ObjectType } from "type-graphql";
import {
  BaseEntity,
  BeforeInsert,
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Relationship } from "./Relationship";

@ObjectType()
@Entity()
export class Message extends BaseEntity {
  @Field()
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Field()
  @Column()
  text: string;

  @ManyToOne(() => Relationship)
  @JoinColumn()
  relationship: Relationship;

  @Field(() => Int)
  @Column()
  createdAt: number;

  @BeforeInsert()
  beforeInsert() {
    const now = (Date.now() / 1000) | 0;
    this.createdAt = now;
  }
}
