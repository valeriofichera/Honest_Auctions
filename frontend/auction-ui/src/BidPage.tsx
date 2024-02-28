import BidHistory from './components/BidHistory';
import Header from './components/Header';

function MainPage() {

    return (
  
  <>
  <Header/>

    <div className="grid grid-cols-12 gap-5">

          <div className="col-start-1 col-span-6 bg-slate-100 shadow-xl border-green-500/100 p-2 justify-between items-center">
						<div className="grid grid-cols-12 gap-5">
							<div className="col-start-1 col-span-3">
								<div className="flex flex-row gap-3 justify-center items-center">
									<img className="w-8" src={usdc} alt="" />
									<div>Price</div>
								</div>
							</div>

							<div className="col-start-4 col-span-4">
								<div className="flex flex-row gap-3 justify-center items-center">
									<div className="font-bold">by: </div>
									<div>0xe2D3C55a61BE30ce58324Be5bd188F1bEAc06f58</div>
								</div>
							</div>

							<div className="col-start-8 col-span-4">
								<div className="flex flex-row gap-3 justify-center items-center">
									<div className="font-bold">Timestamp: </div>
									<div>12/12/2023 01:01:01</div>
								</div>
							</div>

						
						</div>
					</div>

          <div className="col-start-7 col-span-12 bg-slate-100 shadow-xl border-green-500/100 p-2 justify-between items-center">
						<div className="grid grid-cols-12 gap-5">
							<div className="col-start-1 col-span-3">
								<div className="flex flex-row gap-3 justify-center items-center">
									<img className="w-8" src={usdc} alt="" />
									<div>Price</div>
								</div>
							</div>

							<div className="col-start-4 col-span-4">
								<div className="flex flex-row gap-3 justify-center items-center">
									<div className="font-bold">by: </div>
									<div>0xe2D3C55a61BE30ce58324Be5bd188F1bEAc06f58</div>
								</div>
							</div>

							<div className="col-start-8 col-span-4">
								<div className="flex flex-row gap-3 justify-center items-center">
									<div className="font-bold">Timestamp: </div>
									<div>12/12/2023 01:01:01</div>
								</div>
							</div>

						
						</div>
					</div>
		</div>


  <BidHistory/>
  </>
  
    );
  }
  
  export default MainPage;