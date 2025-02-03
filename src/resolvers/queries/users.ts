import { Resolvers } from "../../.gen/graphql";

export const users: Resolvers["Query"]["users"] = (_, __, { dataSources }) => {
  return dataSources.usersService.getUsers();
};
