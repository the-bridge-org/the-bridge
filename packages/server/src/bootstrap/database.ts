import { createConnection } from "typeorm";
import { config } from "../config";

export const connectDb = () => {
  return createConnection(config.database.default);
};
