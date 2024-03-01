import BidHistory from './components/BidHistory.tsx';
import HeaderDapp from './components/HeaderDapp.tsx';
import NFTDisplay from './components/NFTDisplay.tsx';

import usdc from "./assets/usdc.svg"
import NFT from "./assets/example_nft.svg";
import Bid from './components/functions/Bid.tsx';
import AuctionIdInfo from './components/functions/AuctionIdInfo.tsx'
import { CreateAuction } from './components/functions/CreateAuction.tsx';
import { useParams } from 'react-router-dom';
import BidNonFunctional from './components/functions/BidNonFunctional.tsx';

function BidFairValue() {
  const { auctionId } = useParams();

  if (auctionId) return (
  
  <>
  <HeaderDapp/>

    <div className="grid grid-cols-12 gap-5 px-24">

          <div className="col-start-1 col-span-6">
						<NFTDisplay/>
					</div>

          <div className="col-start-8 col-span-5 border-green-500/100 p-2 justify-between items-center mt-36">
          <div className="grid grid-cols-6 gap-5">
              
             

							<div className="col-start-2 col-span-5 bg-[#0B0C15]/90 p-12 rounded-xl gap-5 shadow-xl">
								<div className="flex flex-col gap-3 justify-center items-center">

                <div className="text-3xl font-light">Highest Bid:</div>
                <div className="flex flex-row-reverse gap-2">
                  <div className="text-xl font-light">5 USDC</div>
                  <img className="w-8" src={usdc} alt="" />
                </div>
                  <AuctionIdInfo auctionId={Number(auctionId)} />
                  <BidNonFunctional/>
                  <CreateAuction/>
								</div>
							</div>

							

						
						</div>
					</div>
		</div>


  <BidHistory/>
  </>
  
    );
  }
  
  export default BidFairValue;