import useContractReadFunction from "../../hooks/useContractRead";
import { BigNumber } from "ethers";
import { useBlockNumber } from "wagmi";
import { Link } from "react-router-dom";

export interface Auction {
  nft: string;
  nftId: BigNumber;
  seller: string;
  startingBid: BigNumber;
  endAt: BigNumber;
  started: boolean;
  ended: boolean;
  highestBid: BigNumber;
}

export const FairValueAuctions = () => {
  const { data: blockNumber } = useBlockNumber();
  const {
    data: unformattedData,
    isLoading,
    error,
  } = useContractReadFunction({
    functionName: "getAllAuctions",
    args: [],
  });

  const formattedData = Array.isArray(unformattedData)
    ? unformattedData.map((auction: Auction) => ({
        ...auction,
        nftId: auction.nftId.toString(),
        startingBid: BigNumber.from(auction.startingBid).toString(),
        endAt: BigNumber.from(auction.endAt).toString(),
        highestBid: BigNumber.from(auction.highestBid).toString(),
      }))
    : [];

  if (isLoading || !blockNumber) return <div>Loading...</div>;
  if (error)
    return (
      <div className="text-red-500">
        Error: {(error as any).message || "Unknown error"}
      </div>
    );

  return (
    <div className="p-6">
      <div className="flex flex-row justify-between items-start">
        <div>
          <h3 className="text-2xl font-semibold mb-4">Fair-Value Auctions</h3>
          <div className="text-md mt-[-10px] mb-5">
            Encrypted Bids = No FOMO, powered by FHEnix
          </div>
        </div>
        <Link to="/create-auction">
          <div className="w-[170px] h-[40px] py-[5px] px-[5px] text-xl font-bold inline-flex justify-center items-center gap-[10px] text-white rounded-[10px] bg-[#527BFF] hover:bg-[#3a3f6d80] hover:text-[#8BA2C8] hover:cursor-pointer">
            Create Auction
          </div>
        </Link>
      </div>
      {formattedData && formattedData.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
          {formattedData.map((auction, index) => (
            <Link
              to={`/auction/fair-value/${auction.nftId}`}
              key={index}
              className="p-4 border rounded-lg hover:shadow-lg transition-shadow w-fit"
            >
              <div className="flex flex-row justify-between items-center rounded-lg">
                <img
                  src={`https://pbs.twimg.com/media/GHoZZbPXMAAFciA?format=jpg&name=medium`}
                  alt="NFT"
                  className="rounded-lg h-32 mr-10"
                />
                <div>
                  <h4 className="text-xl font-medium">
                    NFT ID: {auction.nftId}
                  </h4>
                  <p className="text-gray-600">
                    Starting Bid: {auction.startingBid} ETH
                  </p>
                  <p className="text-gray-600">
                    Ends At: {Number(auction.endAt.toString()) - blockNumber}
                  </p>
                  <p className="text-gray-600">
                    Highest Bid: {auction.highestBid} ETH
                  </p>
                  <p
                    className={`text-sm ${auction.started ? "text-green-500" : "text-red-500"}`}
                  >
                    {auction.started
                      ? "Auction Started"
                      : "Auction Not Started"}
                  </p>
                  <p
                    className={`text-sm ${auction.ended ? "text-red-500" : "text-green-500"}`}
                  >
                    {auction.ended ? "Auction Ended" : "Auction Active"}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <p>No auctions data found.</p>
      )}
    </div>
  );
};
