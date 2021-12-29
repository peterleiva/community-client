import type { AppProps } from "next/app";
import React from "react";
import WithApollo from "lib/WithApollo";
import Analytics from "lib/Analytics";
import "styles/globals.scss";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <WithApollo>
      <React.StrictMode>
        <Analytics />
        <Component {...pageProps} />
      </React.StrictMode>
    </WithApollo>
  );
}
export default MyApp;
