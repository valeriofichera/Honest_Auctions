import HeaderDapp from "./components/HeaderDapp.tsx";
import NFTDisplay from "./components/NFTDisplay.tsx";

import { useParams } from "react-router-dom";
import BidNonFunctional from "./components/functions/BidNonFunctional.tsx";
import FHE_meme from "./assets/FHE_meme.svg";

function BidFairValue() {
  const { auctionId } = useParams();

  if (auctionId)
    return (
      <>
        <HeaderDapp />

        <div className="grid grid-cols-12 gap-5 px-24">
          <div className="col-start-2 col-span-5">
            <NFTDisplay />
          </div>

          <div className="mt-12 col-start-7 col-span-5 p-2 justify-between items-center">
            <div className="grid grid-cols-6 gap-5">
              <div className="col-start-2 col-span-5 bg-[#0B0C15]/90 shadow-lg shadow-slate-800 p-12 rounded-xl gap-5">
                <BidNonFunctional />
                <img className="mt-5" src={FHE_meme} alt="" />
              </div>
            </div>
          </div>
        </div>
      </>
    );
}

export default BidFairValue;
