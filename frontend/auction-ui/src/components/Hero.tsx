
import './Hero.css';
import 'animate.css';
import { TypeAnimation } from 'react-type-animation';



const Hero = () => {
  return (
    
    <div className='Hero-Section'>
    
        <div className="hero-text">
        

        <TypeAnimation
          // Same String at the start will only be typed once, initially
          sequence={[
          'Auction NFTs',
          1000,
          '',
          1000,
          'See who Bids',
          1000,
          '123 test',
          1000,
          ]}
          speed={55} // Custom Speed from 1-99 - Default Speed: 40
          style={{ fontSize: '1em' }}
          wrapper="span" // Animation will be rendered as a <span>
          repeat={Infinity} // Repeat this Animation Sequence infinitely
        />

        </div>

        <div>

        
        </div>
      
  </div>
  );
}

export default Hero;