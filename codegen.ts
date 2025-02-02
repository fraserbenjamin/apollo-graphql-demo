
import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: "./schema.gql",
  generates: {
    "./src/.gen/graphql.ts": {
      plugins: ["typescript", "typescript-resolvers"],
      config: {
        contextType: "../context#GraphQLContext",
      }
    }
  }
};

export default config;
