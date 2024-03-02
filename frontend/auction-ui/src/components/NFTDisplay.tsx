import AuctionIdInfoEncrypted from "../components/functions/AuctionIdInfo.tsx";
import { useParams } from "react-router-dom";

// import NFT from '../assets/example_nft.svg'

function NFTDisplay() {
  const NFT =
    "https://pbs.twimg.com/media/GHoZZbPXMAAFciA?format=jpg&name=medium";
  const { auctionId } = useParams();

  if (auctionId)
    return (
      <div className="rounded-3xl col-start-2 col-span-5 bg-[#0B0C15]/90 shadow-lg shadow-slate-800 p-5 max-w-fit gap-5 justify-between items-center">
        <div className="grid grid-cols-6 gap-5">
          <div className="col-start-1 col-span-6 gap-3 justify-center items-center flex flex-col">
            <div className="flex flex-col gap-1 justify-center items-center">
              <div className="text-3xl font-bold">Fair-Value Auction</div>
              <div className="text-md mb-5">all Bids are encrypted</div>
            </div>

            <div className="bg-[#0B0C15] rounded-3xl flex flex-row gap-1 justify-center shadow-[#6c8dc3] shadow-inner items-center">
              <img className="rounded-lg w-64 mt-[-10px]" src={NFT} alt="" />
            </div>

            <div className="mt-[-25px]">
              <AuctionIdInfoEncrypted auctionId={Number(auctionId)} />
            </div>
          </div>
        </div>
      </div>
    );
}

export default NFTDisplay;
