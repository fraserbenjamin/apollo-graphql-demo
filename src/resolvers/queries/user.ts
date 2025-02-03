import { Resolvers } from "../../.gen/graphql";

export const user: Resolvers["Query"]["user"] = (_, { id }, { dataSources }) => {
  return dataSources.usersService.getUserById(id);
};
