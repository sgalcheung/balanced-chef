import type { CodegenConfig } from "@graphql-codegen/cli";
// import { EndpointType, getEndpoint } from './src/config';
import "dotenv/config";

const SQUIDEX_API_URL = `${process.env.SQUIDEX_ENVIRONMENT?.replace(
  /\/+$/,
  ""
)}`;

const config: CodegenConfig = {
  require: ["dotenv/config"],
  // schema: getEndpoint(EndpointType.GraphQL),
  schema: `${SQUIDEX_API_URL}/api/content/${process.env.SQUIDEX_APP_NAME}/graphql`,
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
