import { useAccount } from "wagmi";
import useContractFunction from "../../hooks/useContractFuction.ts";
import { useState } from "react";
import addresses from "../../../constants/deployed_address.ts";
import { sepolia } from "viem/chains";

export const ApproveAuction = () => {
  const { isConnected } = useAccount();
  const [nftId, setNftId] = useState(""); // State to hold the NFT ID input by the user
  const [nftAddress, setNftAddress] = useState("");

  const { execute, status, isLoading } = useContractFunction({
    functionName: "approve",
    args: [addresses[sepolia.id]?.AUCTION_ADDRESS, nftId ? parseInt(nftId) : 1],
    smartContractAddress: addresses[sepolia.id]?.NFT_ADDRESS,
  });

  if (isConnected)
    return (
      <div className="text-md justify-center flex flex-col gap-5 items-center">
        <div className="flex flex-col gap-5">
          <input
            className="bg-white text-black text-lg font-semibold rounded-lg text-center"
            type="text"
            placeholder="NFT Contract Address"
            value={nftAddress}
            onChange={(e) => {
              setNftAddress(e.target.value);
            }}
          />
          <input
            className="bg-white text-black text-lg font-semibold rounded-lg text-center"
            type="number"
            placeholder="NFT ID"
            value={nftId}
            onChange={(e) => {
              setNftId(e.target.value);
            }}
          />
        </div>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded"
          onClick={execute}
          disabled={isLoading}
        >
          {isLoading ? "Approving..." : "Approve"}
        </button>
        <p>{status}</p>
      </div>
    );
};

export default ApproveAuction;
