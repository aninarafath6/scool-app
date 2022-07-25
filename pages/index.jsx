import Head from "next/head";
import Header from "@components/Home/Header/Header";
import HeroSection from "@components/Home/Hero/HeroSection";

const HomePage = () => {
  return (
    <div className="home ">
      <Head>
        <title>Scool</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="section1 lg:px-36">
        <Header />
        <HeroSection />
      </div>
    </div>
  );
};

export default HomePage;
