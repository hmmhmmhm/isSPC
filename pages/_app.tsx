import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { AppFavicon } from "../components/AppFavicon";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <AppFavicon />
      </Head>
      <Component {...pageProps} />;
    </>
  );
}

export default MyApp;
