import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../components/Layout";
import { MenuContextProvider } from "../context/MenuContext";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MenuContextProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </MenuContextProvider>
  );
}

export default MyApp;
