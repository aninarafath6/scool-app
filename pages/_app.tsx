import "../styles/globals.css";
import type { AppProps } from "next/app";

function MyApp1({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp1;
