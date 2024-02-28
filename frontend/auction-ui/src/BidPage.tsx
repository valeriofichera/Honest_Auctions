import BidHistory from './components/BidHistory';
import Header from './components/Header';

import usdc from "./assets/usdc.svg"
import NFT from "./assets/example_nft.svg";

function MainPage() {

    return (
  
  <>
  <Header/>

    <div className="grid grid-cols-12 gap-5 px-24">

          <div className="rounded-3xl col-start-1 col-span-6 bg-slate-400/80 shadow-xl border-green-500/100 p-2 justify-between items-center">
						<div className="grid grid-cols-6 gap-5">
							
              <div className="col-start-1 col-span-3">
								<div className="flex flex-row gap-3 justify-center items-center">
									<img className="w-8" src={usdc} alt="" />
									<div className="text-3xl font-light">NFT Name</div>
								</div>
							</div>

              <div className="col-start-1 col-span-3">
								<div className="flex flex-row gap-3 justify-center items-center">
									<img className="w-96" src={NFT} alt="" />
								</div>
							</div>

							<div className="col-start-2 col-span-3">
								<div className="flex flex-row gap-3 justify-center items-center">
									<div className="font-bold">by: </div>
									<div>0xe2D3C55a61BE30ce58324Be5bd188F1bEAc06f58</div>
								</div>
							</div>

							<div className="col-start-1 col-span-4">
								<div className="flex flex-row gap-3 justify-center items-center">
									<div className="font-bold">Timestamp: </div>
									<div>12/12/2023 01:01:01</div>
								</div>
							</div>

						
						</div>
					</div>

          <div className="col-start-8 col-span-5 border-green-500/100 p-2 justify-between items-center">
          <div className="grid grid-cols-6 gap-5">
              
              <div className="col-start-1 col-span-3">
								
							</div>

							<div className="col-start-2 col-span-3">
								<div className="flex flex-col gap-3 justify-center items-center">

                <div className="text-3xl font-light">Highest Bid:</div>
                <div className="flex flex-row-reverse gap-2">
                  <div className="text-xl font-light">5 USDC</div>
                  <img className="w-8" src={usdc} alt="" />
                </div>

                <input className='bg-white rounded-lg text-center' type="text" placeholder='Enter Amount in ETH' />
                  <a href="/hack" target="_blank" rel="noopener noreferrer">
                  <div className="px-3 py-1 mx-4 bg-black rounded-lg font-3xl text-white hover:bg-slate-500">
                    Place a Bid
                  </div>
                  </a>
								</div>
							</div>

							

						
						</div>
					</div>
		</div>


  <BidHistory/>
  </>
  
    );
  }
  
  export default MainPage;