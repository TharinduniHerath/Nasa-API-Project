import ButtonGradient from "../src/assets/svg/ButtonGradient";
import Header from "../src/components/Header";
import Hero from "../src/components/Hero";
import Features from "../src/components/Features";
import Footer from "../src/components/Footer";

const Home = () => {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
        <Hero />
        <Features />
        <Footer />
      </div>
      <ButtonGradient />
    </>
  );
};

export default Home;
