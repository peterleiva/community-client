import type { AppProps } from "next/app";
import React from "react";
import { Analytics, WithApollo } from "lib";
import "lib/polyfill";
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
