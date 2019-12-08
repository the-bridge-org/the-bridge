import { GraphQLError } from "graphql";

export class ModelNotFoundError extends GraphQLError {
  constructor(message = "Model does not found") {
    super(message);
  }
}
