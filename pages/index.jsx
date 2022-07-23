import Head from "next/head";
import Header from "@components/Home/Header/Header";
import HeroSection from "@components/Home/Hero/HeroSection";

const HomePage = () => {
  return (
    <div className="home lg:px-28">
      <Head>
        <title>Scool</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <HeroSection />
    </div>
  );
};

export default HomePage;
