import BidHistory from "./components/BidHistory.tsx";
import HeaderDapp from "./components/HeaderDapp.tsx";
import NoNFTDisplay from "./components/NoNFTDisplay.tsx";

import { useParams } from "react-router-dom";
import { Bid123 } from "./components/functions/Bid123.tsx";

function BidHidden() {
  const { auctionId } = useParams();

  if (auctionId)
    return (
      <>
        <HeaderDapp />

        <div className="grid grid-cols-12 gap-5 px-24">
          <div className="col-start-2 col-span-4">
            <NoNFTDisplay />
          </div>

          <div className="mt-24 col-start-7 col-span-5 p-2 justify-between items-center">
            <div className="grid grid-cols-6 gap-5">
              <div className="col-start-2 col-span-5 bg-[#0B0C15]/90 shadow-lg shadow-slate-800 p-12 rounded-xl gap-5">
                <Bid123 auctionId={auctionId} />
              </div>
            </div>
          </div>
        </div>

        <BidHistory />
      </>
    );
}

export default BidHidden;
