/**
 * Development data seeder
 */
import { Relationship } from "../models/Relationship";
import { User } from "../models/User";

const findUserOrCreate = async (username: string) => {
  let user = await User.findOne({ where: { username } });

  if (user) {
    return user;
  }

  user = new User();
  user.username = username;
  user.phoneNumber = "7788888888";
  user.password = "password";
  return user.save();
};

const createRelationship = async (user1: User, user2: User) => {
  const u1Relationship = await user1.relationship;
  if (u1Relationship) {
    return u1Relationship;
  }

  const u2Relationship = await user2.relationship;
  if (u2Relationship) {
    return u2Relationship;
  }

  const relationship = new Relationship();
  relationship.user1 = user1;
  relationship.user2 = user2;
  await relationship.save();

  user1.relationship = Promise.resolve(relationship);
  user2.relationship = Promise.resolve(relationship);
  await user1.save();
  await user2.save();

  return relationship;
};

export const seed = async () => {
  const user1 = await findUserOrCreate("user1");
  const user2 = await findUserOrCreate("user2");
  await findUserOrCreate("user3");
  await createRelationship(user1, user2);
};
