
import usdc from "../assets/usdc.svg"
import NFT from '../assets/example_nft.svg'

function NFTDisplay() {
	return (
		<div className='rounded-3xl col-start-1 col-span-5 bg-[#0B0C15]/90 p-5 max-w-fit gap-5 shadow-xl justify-between items-center'>
		<div className="grid grid-cols-6 gap-5">
			<div className="col-start-1 col-span-6 gap-10 justify-center items-center flex flex-col">
			<div className="flex flex-row gap-5 justify-center items-center">
				<img className="w-8" src={usdc} alt="" />
				<div className="text-3xl font-light">NFT Name</div>
			</div>

			<div className="flex flex-row gap-3 justify-center shadow-[#6c8dc3] shadow-xl items-center">
				<img className="w-64" src={NFT} alt="" />
			</div>

			<div className="flex flex-row gap-3 justify-center items-center">
				<div className="font-bold">by: </div>
				<div>0xe2D3C55a61BE30ce58324Be5bd188F1bEAc06f58</div>
			</div>

			<div className="flex flex-row gap-3 justify-center items-center">
				<div className="font-bold">Timestamp: </div>
				<div>12/12/2023 01:01:01</div>
			</div>

			</div>

		 </div>
		</div>
	)
}

export default NFTDisplay;