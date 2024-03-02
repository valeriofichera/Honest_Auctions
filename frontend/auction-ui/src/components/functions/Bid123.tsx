import { useContractWrite, usePrepareContractWrite } from "wagmi";

import EnglishAuctionABI from "../../../constants/abi/EnglishAuction.ts";
import { ethers } from "ethers";
import { Sepolia } from "@usedapp/core";
import { sepolia } from "viem/chains";
import addresses from "../../../constants/deployed_address.ts";

export const Bid123 = ({ auctionId }: { auctionId: string }) => {
  const { config } = usePrepareContractWrite({
    address: addresses[sepolia.id]?.AUCTION_ADDRESS,
    abi: EnglishAuctionABI,
    functionName: "bid",
    chainId: Sepolia.chainId,
    args: [auctionId], // Assuming '3' is a valid argument for your 'bid' function
    overrides: {
      value: ethers.utils.parseEther("0.1"), // Assuming 0.1 ETH is a valid value
    },
  });

  const { data, isLoading, isSuccess, write } = useContractWrite(config);

  return (
    <div>
      <button
        disabled={!write || isLoading}
        onClick={() => write?.()}
        className=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded"
      >
        Place Bid
      </button>
      {isLoading && <div>Transaction in progress...</div>}
      {isSuccess && <div>Transaction successful! Hash: {data?.hash}</div>}
    </div>
  );
};

export default Bid123;

// export const Bid123 = () => {

//   const { isConnected } = useAccount();
//   const [status, setStatus] = useState('');

//   const [price, setPrice] = useState('');
//   const [auctionId, setAuctionId] = useState('');

//   const { write } = useContractWrite({
//     address: '0xf06E084a84846eBCF3e9BbB6045D5201073FBF0E',
//     abi: EnglishAuctionABI,
//     functionName: 'bid',
//     chainId: 11155111,
//     args: [
//         3
//     ],
//     value: parseEther(0.1),
//   });

//   const createBid = () => {
//     write?.();
//     setStatus('Processing...'); // Set initial status
//   };

//     if (auctionId) return (
//     <div className="text-md justify-center flex items-center">
//       {isConnected ? (
//         <>
//         <div className='flex flex-col gap-5'>
//         <div className='flex flex-col gap-5'>
//             <input
//               className='bg-white text-black text-lg font-semibold rounded-lg text-center'
//               type="text"
//               placeholder='Contract Address'
//               value={price}
//               onChange={(e) => setPrice(e.target.value)}
//             />
//             <input
//               className='bg-white text-black text-lg font-semibold rounded-lg text-center'
//               type="number"
//               placeholder='Contract Address'
//               value={auctionId}
//               onChange={(e) => setAuctionId(e.target.value)}
//             />

//         </div>
//           <button
//             className=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded"
//             onClick={createBid}
//             disabled={isLoading}
//           >
//             {isLoading ? 'Creating...' : 'Create Auction'}
//           </button>
//           <p>{status}</p>
//       </div>
//         </>
//       ) : (
//         <p>Please connect your wallet.</p>
//       )}
//     </div>
//   );
// };
