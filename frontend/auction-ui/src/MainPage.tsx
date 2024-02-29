import { CreateAuction } from './components/CreateAuction';
import Header from './components/Header';
import Hero from './components/Hero';
import LogoSlider from './components/LogoSlider';
import NFTDisplay from './components/NFTDisplay';

function MainPage() {

    return (
  
  <>
  <Header/>
  {/* <div className='flex justify-self-center'>
    <NFTDisplay/>
  </div> */}
  <Hero/>
  <LogoSlider/>
  <CreateAuction />

  </>
  
    );
  }
  
  export default MainPage;