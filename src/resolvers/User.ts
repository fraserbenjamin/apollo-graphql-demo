import { Resolvers } from "../.gen/graphql";

export const User: Resolvers["User"] = {
  id: (parent) => parent.id,
  name: (parent) => parent.name,
  posts: (parent, _, { dataSources }) => {
    return dataSources.postsService.getPostsByUserId(parent.id);
  },
}