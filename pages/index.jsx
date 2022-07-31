import Head from "next/head";
import Header from "@components/Home/Header/Header";
import HeroSection from "@components/Home/Hero/HeroSection";
import Explore from "@components/Home/explore/Explore";

const HomePage = () => {
  return (
    <div className="home ">
      <Head>
        <title>Scool</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className=" lg:px-36">
        <Header />
        <HeroSection />

        {/* <HeroSection />
        <HeroSection />
        <HeroSection />
        <HeroSection />
        <HeroSection />
        <HeroSection /> */}

        <Explore />
      </div>
    </div>
  );
};

export default HomePage;
