import arb from "../assets/Arbitrum.svg";
import fuel from "../assets/Fuel.svg";
import base from "../assets/base.svg";
import threshold from "../assets/threshold.svg";
import linea from "../assets/linea.svg";
import moonbeam from "../assets/moonbeam.svg";
import fhenix from "../assets/fhenix.svg";
import artela from "../assets/artela.svg";

import "../styles/Animations.css";

function LogoSlider() {
  const logos = [
    fuel,
    arb,
    base,
    threshold,
    linea,
    moonbeam,
    fhenix,
    artela,
    fuel,
    arb,
    base,
    threshold,
    linea,
    moonbeam,
    fhenix,
    artela,
    fuel,
    arb,
    base,
    threshold,
    linea,
    moonbeam,
    fhenix,
    artela,
  ];
  return (
    <div className="mt-[-67px] w-screen overflow-hidden bg-gradient-to-r from-[#0B0C15] via-[#2B4D7E]/50 to-[#0B0C15] py-5 mb-12">
      {/* Use flex and items-center to vertically center the logos */}
      <div className="flex items-center whitespace-nowrap gap-12 justify-center logo-slider hover:logo-slider">
        {logos.concat(logos).map((logoSrc, index) => (
          <div
            key={index}
            className="inline-flex justify-center"
            style={{ minWidth: "150px" }}
          >
            <img
              src={logoSrc}
              alt={`Logo ${index}`}
              className="mx-auto"
              style={{ width: "250px" }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default LogoSlider;
