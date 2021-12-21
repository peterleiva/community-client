import {
  ApolloClient,
  InMemoryCache,
  NormalizedCacheObject,
} from "@apollo/client";

import pkg from "../../package.json";

export function createApolloClient(): ApolloClient<NormalizedCacheObject> {
  const cache = new InMemoryCache();
  const uri = process.env.API_ENDPOINT;

  const client = new ApolloClient({
    ssrMode: true,
    name: "Web App",
    version: pkg.version,
    uri,
    cache,
  });

  return client;
}
