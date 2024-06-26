import AboutUs from "./components/about-us";
import HeroSection from "./components/hero-section";
import Questions from "./components/questions";
import Services from "./components/services";
export default function Home() {
  return (
    <div>
      <HeroSection />
      <AboutUs />
      <Services />
      <Questions />
    </div>
  );
};
