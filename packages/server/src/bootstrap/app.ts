import { ApolloServer } from "apollo-server";
import { buildSchema } from "type-graphql";
import { config } from "../config";
import { authChecker, context } from "../services/middlewares";

export const createSchema = async () =>
  buildSchema({
    authChecker,
    resolvers: config.graphql.resolver.paths,
    emitSchemaFile: config.graphql.schema.emitPath,
  });

export const build = async () => {
  const schema = await createSchema();

  const isProduction = process.env.NODE_ENV === "production";

  return new ApolloServer({
    schema,
    context,
    tracing: !isProduction,

    playground: isProduction
      ? false
      : (config.graphql.playground.settings as any),
  });
};

export const serve = async () => {
  const app = await build();

  const server = await app.listen(config.app.port);

  console.log(`🚀 Server started on ${server.url}`);

  return server;
};
