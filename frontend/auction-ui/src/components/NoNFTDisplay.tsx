import { useParams } from "react-router-dom";
import AuctionIdInfo from "../components/functions/AuctionIdInfo.tsx";

import Hidden_NFT from "../assets/no_nft_icon.svg";

function NoNFTDisplay() {
  const { auctionId } = useParams();

  if (auctionId)
    return (
      <div className="rounded-3xl col-start-2 col-span-5 bg-[#0B0C15]/90 shadow-lg shadow-slate-800 p-5 max-w-fit gap-5 justify-between items-center">
        <div className="grid grid-cols-6 gap-5">
          <div className="col-start-1 col-span-6 gap-3 justify-center items-center flex flex-col">
            <div className="flex flex-col gap-1 justify-center items-center">
              <div className="text-3xl font-bold">Hidden NFT</div>
              <div className="text-md">... will reveal after Auction ends</div>
            </div>

            <div className="bg-[#0B0C15] rounded-3xl flex flex-row gap-1 justify-center shadow-[#6c8dc3] shadow-inner items-center">
              <img className="w-64 mt-[-10px]" src={Hidden_NFT} alt="" />
            </div>

            <div className="mt-[-25px]">
              <AuctionIdInfo auctionId={Number(auctionId)} />
            </div>
          </div>
        </div>
      </div>
    );
}

export default NoNFTDisplay;
