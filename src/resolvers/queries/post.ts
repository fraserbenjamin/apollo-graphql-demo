import { Resolvers } from "../../.gen/graphql";

export const post: Resolvers["Query"]["post"] = (_, { id }, { dataSources }) => {
  return dataSources.postsService.getPostById(id);
};
