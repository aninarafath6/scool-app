import Head from "next/head";
import { store } from "@redux/store";
import { Provider } from "react-redux";
import Landing from "@components/landing";

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
