import type { StandaloneServerContextFunctionArgument } from "@apollo/server/standalone";
import { UsersService, PostsService } from "./dataSources";
import type { IncomingMessage, ServerResponse } from "http";

export interface GraphQLContext {
  dataSources: {
    usersService: UsersService;
    postsService: PostsService;
  };
  req: IncomingMessage,
  res: ServerResponse,
}

export const createContext = async ({ req, res }: StandaloneServerContextFunctionArgument): Promise<GraphQLContext> => {
  return {
    dataSources: {
      usersService: new UsersService(),
      postsService: new PostsService(),
    },
    req,
    res,
  };
};
