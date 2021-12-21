import { ApolloProvider } from "@apollo/client";
import { createApolloClient } from "./apollo-client";

type GraphQLProviderProps = {
  children: React.ReactNode | React.ReactNode[] | null;
};

export default function GraphQLProvider({
  children,
}: GraphQLProviderProps): JSX.Element {
  const client = createApolloClient();

  return <ApolloProvider client={client}>{children}</ApolloProvider>;
}
