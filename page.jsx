import Categories from "@/components/categories";
import Footer from "@/components/footer";
import Header from "@/components/header";
import HeroSection from "@/components/heroSection";
import HighlyRated from "@/components/highlyRated";
import Head from "next/head";

export default function Home() {
    return (
      <div className="bg-custom-gradient">
        <Head>
          <title>The Dabbawallas</title>
        </Head>
        <Header />
        <HeroSection />
        <Categories />
        <HighlyRated />
        <Footer />
      </div>
    );
  }