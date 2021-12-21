import "styles/globals.scss";
import type { AppProps } from "next/app";
import GraphQLProvider from "graphql-provider";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <GraphQLProvider>
      <Component {...pageProps} />
    </GraphQLProvider>
  );
}
export default MyApp;
