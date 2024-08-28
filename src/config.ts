interface Config {
  squidexAppName?: string;
  squidexEnvironment?: string;
}

export const config: Config = {
  squidexAppName: import.meta.env.SQUIDEX_APP_NAME || undefined,
  squidexEnvironment: import.meta.env.SQUIDEX_ENVIRONMENT || undefined,
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
