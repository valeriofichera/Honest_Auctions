import useContractReadFunction from "../../hooks/useContractRead";
import { type BigNumber } from "ethers";
import { Link } from "react-router-dom";
import { useAccount, useBlockNumber } from "wagmi";

export interface Auction {
  nft: string;
  nftId: BigNumber;
  seller: string;
  startingBid: BigNumber;
  endAt: BigNumber;
  started: boolean;
  ended: boolean;
  highestBidder: string;
  highestBid: BigNumber;
  reservePrice: BigNumber;
  cancelled: boolean;
}

export const ReadAuction = () => {
  const { address } = useAccount();
  const { data: blockNumber } = useBlockNumber();

  const {
    data: unformattedData,
    isLoading,
    error,
  } = useContractReadFunction({
    functionName: "getAuctionsByOwner",
    args: [address],
  });

  // Process and format auction data
  const formattedData = Array.isArray(unformattedData)
    ? unformattedData.map((auction: Auction) => ({
        ...auction,
        nftId: auction.nftId.toString(),
        startingBid: auction.startingBid.toString(),
        endAt: auction.endAt.toString(),
        highestBid: auction.highestBid.toString(),
        reservePrice: auction.reservePrice.toString(),
      }))
    : [];

  if (isLoading || !blockNumber) return <div>Loading...</div>;
  if (error)
    return <div>Error: {(error as any).message || "Unknown error"}</div>;

  return (
    <div>
      <h3>Auction Details for account {address}</h3>
      {formattedData.length > 0 ? (
        formattedData.map((auction, index) => (
          <Link
            to={`/auction/${auction.nftId}`}
            key={index}
            className="p-4 border rounded-lg hover:shadow-lg transition-shadow"
          >
            <h4 className="text-xl font-medium">NFT ID: {auction.nftId}</h4>
            <p className="text-gray-600">
              Starting Bid: {auction.startingBid} ETH
            </p>
            <p className="text-gray-600">
              Ends In: {Number(auction.endAt.toString()) - blockNumber} blocks
            </p>
            <p className="text-gray-600">
              Highest Bid: {auction.highestBid} ETH
            </p>
            <p
              className={`text-sm ${auction.started ? "text-green-500" : "text-red-500"}`}
            >
              {auction.started ? "Auction Started" : "Auction Not Started"}
            </p>
            <p
              className={`text-sm ${auction.ended ? "text-red-500" : "text-green-500"}`}
            >
              {auction.ended ? "Auction Ended" : "Auction Active"}
            </p>
          </Link>
        ))
      ) : (
        <p>No auction data found for this account.</p>
      )}
    </div>
  );
};
