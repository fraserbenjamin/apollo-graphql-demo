import { Resolvers } from "../.gen/graphql";

export const Post: Resolvers["Post"] = {
  id: (parent) => parent.id,
  message: (parent) => parent.message,
  user: (parent, _, { dataSources }) => {
    console.log('parent', parent);
    return dataSources.usersService.getUserById(parent.userId);
  },
}
