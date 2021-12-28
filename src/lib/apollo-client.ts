import {
  ApolloClient,
  InMemoryCache,
  NormalizedCacheObject,
} from "@apollo/client";

import pkg from "../../package.json";

export function createApolloClient(): ApolloClient<NormalizedCacheObject> {
  const cache = new InMemoryCache();
  const uri = process.env.NEXT_PUBLIC_API_ENDPOINT;

  const client = new ApolloClient({
    ssrMode: typeof window === "undefined",
    name: "Web App",
    version: pkg.version,
    cache,
    uri,
  });

  return client;
}
