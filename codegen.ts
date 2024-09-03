import type { CodegenConfig } from '@graphql-codegen/cli';
import { EndpointType, getEndpoint } from './src/config';

const config: CodegenConfig = {
  require: ["dotenv/config", "ts-node/register"],
  schema: getEndpoint(EndpointType.GraphQL),
  documents: ["src/**/*.ts"],
  generates: {
    "./src/__generated__/": {
      preset: "client",
      config: {
        useTypeImports: true,
      },
    },
  },
  // ignoreNoDocuments: true,
};

export default config;
