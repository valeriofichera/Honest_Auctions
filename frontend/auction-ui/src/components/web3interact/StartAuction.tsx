
import { useAccount } from 'wagmi';
import useContractFunction from '../../hooks/useContractFuction';

export const StartAuction = () => {
  const { isConnected } = useAccount();

  const auctionId = 6; // Change this to the auction id you want to start

  // Parameters for starting an auction
  const params = {
    functionName: 'start',
    args: [
        auctionId
    ],
  };

  const { execute, status, isLoading } = useContractFunction(params);

  return (
    <div className="text-md justify-center flex items-center">
      {isConnected ? (
        <>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={execute}
            disabled={isLoading}
          >
            {isLoading ? 'Creating...' : 'Start Auction'}
          </button>
          <p>{status}</p>
        </>
      ) : (
        <p>Please connect your wallet.</p>
      )}
    </div>
  );
};
