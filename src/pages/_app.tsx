import "styles/globals.scss";
import type { AppProps } from "next/app";
import WithApollo from "lib/WithApollo";
import React from "react";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <WithApollo>
      <React.StrictMode>
        <Component {...pageProps} />
      </React.StrictMode>
    </WithApollo>
  );
}
export default MyApp;
