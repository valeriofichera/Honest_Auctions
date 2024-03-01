
import Auctions from './components/Auction';
import Header from './components/Header';
import Hero from './components/Hero';
import LogoSlider from './components/LogoSlider';


function MainPage() {

    return (
  
  <>
  <Header/>
  {/* <div className='flex justify-self-center'>
    <NFTDisplay/>
  </div> */}
  <Hero/>
  <LogoSlider/>
  <Auctions />

  </>
  
    );
  }
  
  export default MainPage;