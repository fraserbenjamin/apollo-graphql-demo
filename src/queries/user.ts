import { Resolvers } from "../.gen/graphql";

export const user: Resolvers['Query']['user'] = (_, __, { dataSources }) => {
  return {
    username: dataSources.user.getUsername(),
  }
};
