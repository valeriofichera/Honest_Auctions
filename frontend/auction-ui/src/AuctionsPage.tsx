import HeaderDapp from "./components/HeaderDapp.tsx";
import { FairValueAuctions } from "./components/web3fetch/FairValueAuctions.tsx";
import { HiddenNFTAuctions } from "./components/web3fetch/HiddenNFTAuctions.tsx";

function AuctionsPage() {
  return (
    // className='w-screen h-screen  bg-[#0B0C15]/90 z-[2]
    <div className="mt-[px]">
      <HeaderDapp />

      <div className="grid grid-cols-12 gap-5 px-24">
        <div className="col-start-1 col-span-12">
          <div className="rounded-3xl bg-[#0B0C15] bg-opacity-75 shadow-xl border-green-500/100 p-2 justify-between items-center">
            <HiddenNFTAuctions />
          </div>
        </div>

        <div className="col-start-1 col-span-12">
          <div className="rounded-3xl bg-[#0B0C15]/90 bg-opacity-75 shadow-xl border-green-500/100 p-2 justify-between items-center">
            <FairValueAuctions />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AuctionsPage;
