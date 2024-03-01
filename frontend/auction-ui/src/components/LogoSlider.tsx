
import arb from '../assets/Arbitrum.svg';
import fuel from '../assets/Fuel.svg'


import '../styles/Animations.css';

function LogoSlider() {
  const logos = [fuel, arb,fuel, arb,fuel, arb,fuel, arb,fuel, arb,fuel, arb,fuel, arb,fuel, arb,fuel, arb,fuel, arb,fuel, arb,]
  return (
    <div className="mt-[-67px] w-screen overflow-hidden bg-gradient-to-r from-[#0B0C15] via-[#2B4D7E]/50 to-[#0B0C15] py-5 mb-12">
      {/* Use flex and items-center to vertically center the logos */}
      <div className="flex items-center whitespace-nowrap gap-12 justify-center logo-slider hover:logo-slider">
        {logos.concat(logos).map((logoSrc, index) => (
          <div key={index} className="inline-flex justify-center" style={{ minWidth: '150px' }}>
            <img src={logoSrc} alt={`Logo ${index}`} className="mx-auto" style={{ width: '250px' }} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default LogoSlider;
