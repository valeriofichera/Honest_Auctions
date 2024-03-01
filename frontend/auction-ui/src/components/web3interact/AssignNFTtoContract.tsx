
import { useAccount } from 'wagmi';
import useContractFunction from '../../hooks/useContractFuction.ts';
import { ENGLISH_AUCTION_ADDRESS_SEPOLIA, NFT_ADDRESS_SEPOLIA } from '../../../constants/deployed_address.ts';
import { useState } from 'react';

export const ApproveAuction = () => {
    const { isConnected } = useAccount();
    const [nftId, setNftId] = useState(''); // State to hold the NFT ID input by the user

    const { execute, status, isLoading } = useContractFunction({
      functionName: 'approve',
      args: [ENGLISH_AUCTION_ADDRESS_SEPOLIA, nftId ? parseInt(nftId) : 1],
      smartContractAddress: NFT_ADDRESS_SEPOLIA,
  });

  if (isConnected) return (
    <div className="text-md justify-center flex items-center">
          <input
            type="number" // Assuming NFT ID is a number
            value={nftId}
            onChange={(e) => setNftId(e.target.value)}
            className="mr-2 py-2 px-4"
            placeholder="Enter NFT ID"
          />
          <button
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
            onClick={execute}
            disabled={isLoading}
          >
            {isLoading ? 'Creating...' : 'Approve NFT to Auction Contract'}
          </button>
          <p>{status}</p>
    </div>
  );
};


export default ApproveAuction;