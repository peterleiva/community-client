import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

type GraphQLProviderProps = {
  children: React.ReactNode | React.ReactNode[] | null;
};

export default function GraphQLProvider({
  children,
}: GraphQLProviderProps): JSX.Element {
  const cache = new InMemoryCache();

  const client = new ApolloClient({
    uri: process.env.API_ENDPOINT,
    cache,
  });

  return <ApolloProvider client={client}>{children}</ApolloProvider>;
}
