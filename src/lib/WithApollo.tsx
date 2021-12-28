import { useMemo } from "react";
import { ApolloProvider } from "@apollo/client";
import { createApolloClient } from "./apollo-client";

type GraphQLProviderProps = {
  children: React.ReactNode | React.ReactNode[] | null;
};

export default function WithApollo({
  children,
}: GraphQLProviderProps): JSX.Element {
  const client = useMemo(createApolloClient, []);

  return <ApolloProvider client={client}>{children}</ApolloProvider>;
}
