
import type { CodegenConfig } from '@graphql-codegen/cli';

// https://the-guild.dev/graphql/codegen/plugins/typescript/typescript-resolvers
const config: CodegenConfig = {
  overwrite: true,
  schema: "./schema.gql",
  generates: {
    "./src/.gen/graphql.ts": {
      plugins: ["typescript", "typescript-resolvers"],
      config: {
        useIndexSignature: true,
        // defaultMapper: 'Partial<{T}>',
        contextType: "../context#GraphQLContext",
        mappers: {
          Post: "../dataSources/Posts#PostModel",
          User: "../dataSources/Users#UserModel",
        },
        avoidOptionals: true,
        immutableTypes: true,
      }
    }
  }
};

export default config;
