import type { AppProps } from "next/app";
import React from "react";
import "../node_modules/antd/dist/antd";
function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
