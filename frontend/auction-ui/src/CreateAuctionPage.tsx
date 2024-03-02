import HeaderDapp from './components/HeaderDapp.tsx';
import ApproveAuction from './components/web3interact/AssignNFTtoContract.tsx';
import { CreateAuction } from './components/functions/CreateAuction.tsx';
import { ReadAuction } from './components/web3fetch/ReadAuctions.tsx';
import Taco from './components/taco/Taco.tsx';

function CreateAuctionPage() {

    return (
        <>
        <HeaderDapp/>

            <div className="grid grid-cols-12 gap-5 px-24">
                <div className="col-start-1 col-span-12">
                    <div className='rounded-3xl bg-slate-400/80 bg-opacity-75 shadow-xl border-green-500/100 p-2 justify-between items-center'>
                        <ApproveAuction />
                        <CreateAuction />
                        <Taco />
                    </div>
                </div>
            </div>


            <div className="mt-10 grid grid-cols-12 gap-5 px-24">
                <div className="col-start-1 col-span-12">
                    <div className='rounded-3xl bg-slate-400/80 bg-opacity-75 shadow-xl border-green-500/100 p-2 justify-between items-center'>
                        <div>
                            My past auctions:
                        </div>
                        <ReadAuction />
                    </div>
                </div>
            </div>
        </>
  
    );
  }
  
  export default CreateAuctionPage;