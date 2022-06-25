import Head from "next/head";
import Home from "@components/Home";

const HomePage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Scool</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
        <Home />
      </main>
    </div>
  );
};

export default HomePage;
