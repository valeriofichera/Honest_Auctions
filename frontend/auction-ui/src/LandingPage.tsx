import FheDiagram from "./components/FheDiagram";
import Header from "./components/Header";
import Hero from "./components/Hero";
import LogoSlider from "./components/LogoSlider";
import ThresholdDiagram from "./components/ThresholdDiagram";

function LandingPage() {
  return (
    <>
      <Header />
      {/* <div className='flex justify-self-center'>
    <NFTDisplay/>
  </div> */}
      <Hero />
      <LogoSlider />

      <ThresholdDiagram />
      <FheDiagram />
    </>
  );
}

export default LandingPage;
