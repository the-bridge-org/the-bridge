import * as bcrypt from "bcryptjs";
import { Field, ID, Int, ObjectType } from "type-graphql";
import {
  BaseEntity,
  BeforeInsert,
  BeforeUpdate,
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Relationship } from "./Relationship";

@ObjectType()
@Entity()
export class User extends BaseEntity {
  @Field(() => ID)
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Field()
  @Column()
  username: string;

  @Field()
  @Column()
  phoneNumber: string;

  @Column()
  password: string;

  @Field({ nullable: true })
  token?: string;

  @Field(() => Relationship, { nullable: true })
  @ManyToOne(() => Relationship, { nullable: true })
  @JoinColumn()
  relationship: Promise<Relationship>;

  @Field(() => Int)
  @Column()
  createdAt: number;

  @Field(() => Int)
  @Column()
  updatedAt: number;

  @BeforeInsert()
  beforeInsert() {
    this.password = bcrypt.hashSync(this.password);
    const now = (Date.now() / 1000) | 0;
    this.createdAt = now;
    this.updatedAt = now;
  }

  @BeforeUpdate()
  beforeUpdate() {
    this.updatedAt = (Date.now() / 1000) | 0;
  }
}
