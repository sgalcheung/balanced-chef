import "dotenv/config";

interface Config {
  squidexAppName?: string;
  squidexEnvironment?: string;
}

// Utility function to get environment variables based on the runtime environment
// Reference: https://www.reddit.com/r/reactjs/comments/1e0wye1/conditionally_use_processenv_or_importmetaenv/
const getEnvVariable = (key: string): string | undefined => {
  if (import.meta.env) {
    // Vite environment
    return import.meta.env[key];
  } else {
    // Node.js environment
    return process.env[key];
  }
};

export const config: Config = {
  squidexAppName: getEnvVariable("SQUIDEX_APP_NAME"),
  squidexEnvironment: getEnvVariable("SQUIDEX_ENVIRONMENT"),
};

export enum EndpointType {
  Assets,
  GraphQL,
}

const SQUIDEX_API_URL = `${config.squidexEnvironment?.replace(/\/+$/, "")}`;

export function getEndpoint(endponitType: EndpointType) {
  const { squidexAppName } = config;

  switch (endponitType) {
    case EndpointType.Assets:
      return `${SQUIDEX_API_URL}/api/assets/${squidexAppName}`;
    case EndpointType.GraphQL:
      return `${SQUIDEX_API_URL}/api/content/${squidexAppName}/graphql`;
    default:
      const _exhaustiveCheck: never = endponitType;
      return _exhaustiveCheck;
  }
}
