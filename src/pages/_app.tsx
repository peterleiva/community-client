import type { AppProps } from "next/app";
import React from "react";
import { Analytics, WithApollo } from "lib";
import { ToastProvider } from "components";
import "lib/polyfill";
import "styles/index.css";
import "styles/globals.scss";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <WithApollo>
      <React.StrictMode>
        <Analytics />
        <ToastProvider>
          <Component {...pageProps} />
        </ToastProvider>
      </React.StrictMode>
    </WithApollo>
  );
}
export default MyApp;
