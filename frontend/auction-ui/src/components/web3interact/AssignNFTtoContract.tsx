
import { useAccount } from 'wagmi';
import useContractFunction from '../../hooks/useContractFuction.ts';
import { ENGLISH_AUCTION_ADDRESS_SEPOLIA, NFT_ADDRESS_SEPOLIA } from '../../../constants/deployed_address.ts';

export const ApproveAuction = () => {
    const { isConnected } = useAccount();
    
  const nft_id = 5;

  // Parameters for creating an auction
  const params = {
    functionName: 'approve',
    args: [
        ENGLISH_AUCTION_ADDRESS_SEPOLIA,
        nft_id,
    ],
    smartContractAddress: NFT_ADDRESS_SEPOLIA,
  };

  const { execute, status, isLoading } = useContractFunction(params);

  return (
    <div className="text-md justify-center flex items-center">
      {isConnected ? (
        <>
          <button
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
            onClick={execute}
            disabled={isLoading}
          >
            {isLoading ? 'Creating...' : 'Approve NFT to Auction Contract'}
          </button>
          <p>{status}</p>
        </>
      ) : (
        <p>Please connect your wallet.</p>
      )}
    </div>
  );
};


export default ApproveAuction;