import type { StandaloneServerContextFunctionArgument } from "@apollo/server/standalone";
import { User } from "./dataSources";
import type { IncomingMessage, ServerResponse } from "http";

export interface GraphQLContext {
  dataSources: {
    user: User;
  };
  req: IncomingMessage,
  res: ServerResponse,
}

export const createContext = async ({ req, res }: StandaloneServerContextFunctionArgument): Promise<GraphQLContext> => {
  return {
    dataSources: {
      user: new User(),
    },
    req,
    res,
  };
};
