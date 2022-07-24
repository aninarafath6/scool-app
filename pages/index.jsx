import Head from "next/head";
import Header from "@components/Home/Header/Header";
import HeroSection from "@components/Home/Hero/HeroSection";

const HomePage = () => {
  return (
    <div className="home ">
      <Head>
        <title>Scool</title>
        <link rel="icon" href="/favicon.ico" />
        <script src="https://cdnjs.cloudflare.com/ajax/libs/bodymovin/5.6.4/lottie_svg.min.js"></script>
      </Head>
      <div className="section1 lg:px-28">
        <Header />
        <HeroSection />
      </div>
      <div className="section2">
        <HeroSection />
      </div>
    </div>
  );
};

export default HomePage;
