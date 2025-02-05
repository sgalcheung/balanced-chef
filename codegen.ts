const config = {
	schema: process.env.SQUIDEX_GRAPHQL_URL,
	documents: ["src/**/*.ts"],
	generates: {
		"./generated/gql/": {
			preset: "client",
			config: {
				useTypeImports: true,
			},
		},
	},
	// ignoreNoDocuments: true,
};

export default config;
