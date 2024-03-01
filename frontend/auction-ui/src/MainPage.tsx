import { ApproveAuction } from './components/web3interact/AssignNFTtoContract';
import { CreateAuction } from './components/web3interact/CreateAuction';
import Header from './components/Header';
import Hero from './components/Hero';
import LogoSlider from './components/LogoSlider';
import NFTDisplay from './components/NFTDisplay';
import { ReadAuction } from './components/web3fetch/ReadAuctions';

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
  <ApproveAuction />

  </>
  
    );
  }
  
  export default MainPage;