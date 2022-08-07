import Head from "next/head";
import { store } from "@redux/store";
import Landing from "@components/landing";

import { Provider } from "react-redux";

const HomePage = () => {
  return (
    <>
      <Head>
        <title>Scool</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Provider store={store}>
        <Landing />
      </Provider>
    </>
  );
};

export default HomePage;
