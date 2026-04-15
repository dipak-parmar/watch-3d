import WatchScroll from "@/components/WatchScroll";
import HeroSlider from "@/components/HeroSlider";
import FeatureSection from "@/components/FeatureSection";
import ImageParallax from "@/components/ImageParallax";
import ShopSection from "@/components/ShopSection";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main className="bg-[#ECECEC] text-black">

      <Navbar />

      {/* Endless Sliding Hero Section */}
      <section id="home">
        <HeroSlider />
      </section>

      {/* Featured Insight Section */}
      <section id="insights">
        <FeatureSection />
      </section>

      {/* The Scrollytelling Experience */}
      <section id="mechanics">
        <WatchScroll />
      </section>

      {/* Foreground Floating Parallax Section */}
      <section id="collection">
        <ImageParallax />
      </section>

      {/* Luxury Shopping Selection */}
      <ShopSection />

      {/* Footer Section */}
      <Footer />
    </main>
  );
} 
