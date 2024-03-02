import { useAccount, useNetwork } from "wagmi";
import useContractFunction from "../../hooks/useContractFuction";
import addresses from "../../../constants/deployed_address.ts";
import { sepolia } from "viem/chains";

export const CreateAuction = () => {
  const { isConnected } = useAccount();
  const { chain } = useNetwork();

  const chainId = chain?.id ?? 0;

  if (!chainId) return null;

  const nft_address = addresses[sepolia.id]?.NFT_ADDRESS;
  const nft_id = 3;
  const starting_price = 1;
  const duration = 100;
  const reserve_price = 3;

  // Parameters for creating an auction
  const params = {
    functionName: "createAndStartAuction",
    args: [nft_address, nft_id, starting_price, duration, reserve_price],
  };

  const { execute, status, isLoading } = useContractFunction(params);

  if (isConnected)
    return (
      <div className="text-md justify-center flex items-center">
        <>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={execute}
            disabled={isLoading}
          >
            {isLoading ? "Creating..." : "Create Auction"}
          </button>
          <p>{status}</p>
        </>
      </div>
    );
};
