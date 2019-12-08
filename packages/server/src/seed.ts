import { connectDb } from "./bootstrap/database";
import { seed } from "./bootstrap/seeder";

connectDb().then(async connection => {
  await seed();
  return connection.close();
});
