import "animate.css";
import { TypeAnimation } from "react-type-animation";
import "./Hero.css";

const Hero = () => {
  return (
    <div className="Hero-Section my-[250px]">
      <div className="hero-text">
        <TypeAnimation
          // Same String at the start will only be typed once, initially
          sequence={[
            "Buy Polkadot Blockspace",
            1000,
            "Auction off your Blockspace",
            1000,
            "Buy it and sell it here!",
            1000,
          ]}
          speed={55} // Custom Speed from 1-99 - Default Speed: 40
          style={{ fontSize: "1em" }}
          wrapper="span" // Animation will be rendered as a <span>
          repeat={Infinity} // Repeat this Animation Sequence infinitely
        />
      </div>
    </div>
  );
};

export default Hero;
