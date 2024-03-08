import HeaderDapp from "./components/HeaderDapp.tsx";
import ApproveAuction from "./components/web3interact/AssignNFTtoContract.tsx";
import { CreateAuction } from "./components/functions/CreateAuction.tsx";
import Taco from "./components/taco/Taco.tsx";

import line from "./assets/line.svg";
import line2 from "./assets/line2.svg";
import poweredByT from "./assets/poweredByT.svg";

function CreateAuctionPage() {
  return (
    <>
      <HeaderDapp />

      <div className="grid grid-cols-12 gap-10 px-24">
        <div className="col-start-1 col-span-5">
          <div className="rounded-xl flex flex-col bg-[#0B0C15]/90 shadow-lg shadow-slate-800 p-5 max-w-fit gap-5 justify-between items-center">
            <div className="text-lg font-bold">
              1. Approve the NFT to the Auction Contract
            </div>
            <img src={line2} alt="" />
            <ApproveAuction />
          </div>
        </div>


        <div className="col-start-7 col-span-5">
          <div className="rounded-xl flex flex-col bg-[#0B0C15]/90 shadow-lg shadow-slate-800 p-5 max-w-fit gap-5 justify-between items-center">
            <div className="text-lg font-bold">3. Create Auction</div>
            <img src={line2} alt="" className="w-96" />
            <CreateAuction />
          </div>
        </div>
      </div>
    </>
  );
}

export default CreateAuctionPage;
