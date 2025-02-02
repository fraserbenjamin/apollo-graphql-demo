import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { readFile } from 'fs/promises';
import { type Resolvers } from "./.gen/graphql";
import { createContext, GraphQLContext } from './context';
import * as queries from "./queries";

const typeDefs = await readFile("./schema.gql", "utf8");

const resolvers: Resolvers = {
  Query: queries,
};

const server = new ApolloServer<GraphQLContext>({
  typeDefs,
  resolvers,
});

const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 },
  context: createContext,
});

console.log(`🚀  Server ready at: ${url}`);
