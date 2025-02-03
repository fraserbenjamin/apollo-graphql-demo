import { Resolvers } from "../../.gen/graphql";

export const posts: Resolvers["Query"]["posts"] = (_, __, { dataSources }) => {
  return dataSources.postsService.getPosts();
};
