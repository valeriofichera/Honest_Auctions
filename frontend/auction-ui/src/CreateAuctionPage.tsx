import BidHistory from './components/BidHistory.tsx';
import HeaderDapp from './components/HeaderDapp.tsx';
import { AllAuctions } from './components/web3fetch/AllAucitons.tsx';
import { Link } from 'react-router-dom';
import ApproveAuction from './components/web3interact/AssignNFTtoContract.tsx';
import { CreateAuction } from './components/functions/CreateAuction.tsx';
import { ReadAuction } from './components/web3fetch/ReadAuctions.tsx';

function CreateAuctionPage() {

    return (
  
  <>
  <HeaderDapp/>

    <div className="grid grid-cols-12 gap-5 px-24">
      <div className="col-start-1 col-span-12">
        <div className='rounded-3xl bg-slate-400/80 bg-opacity-75 shadow-xl border-green-500/100 p-2 justify-between items-center'>
            <ApproveAuction />
            <CreateAuction />
        </div>
      </div>

		</div>

    <div>
        My past auctions:
    </div>
    <ReadAuction />
  </>
  
    );
  }
  
  export default CreateAuctionPage;