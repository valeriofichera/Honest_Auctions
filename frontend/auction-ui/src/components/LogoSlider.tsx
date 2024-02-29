
import arb from '../assets/Arbitrum.svg';
import fuel from '../assets/Fuel.svg'


import '../styles/Animations.css';

function LogoSlider() {
  const logos = [fuel, arb,]
  return (
    <div className="overflow-hidden bg-gradient-to-r from-[#8699c2] via-[#2B4D7E] to-[#8699c2] py-5 mt-12 mb-12 w-screen">
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
