import { Layout } from "@/app/layout/layout";
import type { AppProps } from "next/app";
import "../app/globals.css";
import Head from "next/head";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <title>Shoes Shop</title>
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
};

export default App;
