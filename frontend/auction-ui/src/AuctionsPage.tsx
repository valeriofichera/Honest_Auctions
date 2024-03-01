import BidHistory from './components/BidHistory.tsx';
import HeaderDapp from './components/HeaderDapp.tsx';
import { AllAuctions } from './components/web3fetch/AllAucitons.tsx';
import { Link } from 'react-router-dom';

function AuctionsPage() {

    return (
  
  <>
  <HeaderDapp/>

    <div className="grid grid-cols-12 gap-5 px-24">
      <div className="col-start-1 col-span-12">
        <div className='rounded-3xl bg-slate-400/80 bg-opacity-75 shadow-xl border-green-500/100 p-2 justify-between items-center'>
          <Link to="/create-auction" className=" text-white bg-slate-500">
            <div className="flex flex-col  justify-center items-center">
              <div className="text-2xl font-light">Create Auction</div>
            </div>
          </Link>
          <AllAuctions />
        </div>
      </div>

		</div>


  <BidHistory/>
  </>
  
    );
  }
  
  export default AuctionsPage;