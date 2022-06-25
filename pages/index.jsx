import Head from "next/head";
import { store } from "@redux/store";
import { Provider } from "react-redux";
import Home from "@components/Home";

const HomePage = () => {
  return (
    <>
      <Head>
        <title>Scool</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Provider store={store}>
        <Home />
      </Provider>
    </>
  );
};

export default HomePage;
