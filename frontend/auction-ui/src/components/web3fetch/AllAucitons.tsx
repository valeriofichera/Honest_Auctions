import useContractReadFunction from '../../hooks/useContractRead';
import { BigNumber } from 'ethers';
import { useBlockNumber } from 'wagmi';
import { Link } from 'react-router-dom'; 

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

export const AllAuctions = () => {
    const { data: blockNumber } = useBlockNumber();
    const { data: unformattedData, isLoading, error } = useContractReadFunction({
        functionName: 'getAllAuctions',
        args: [],
    });

    const formattedData = Array.isArray(unformattedData) ? unformattedData.map((auction: Auction) => ({
        ...auction,
        nftId: auction.nftId.toString(),
        startingBid: BigNumber.from(auction.startingBid).toString(),
        endAt: BigNumber.from(auction.endAt).toString(),
        highestBid: BigNumber.from(auction.highestBid).toString(),
    })) : [];

    if (isLoading || !blockNumber) return <div>Loading...</div>;
    if (error) return <div className="text-red-500">Error: {(error as any).message || 'Unknown error'}</div>;

    return (
        <div className="mt-5 p-6">
            <h3 className="text-2xl font-semibold mb-4">All Auctions</h3>
            {formattedData && formattedData.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {formattedData.map((auction, index) => (
                        <Link to={`/auction/${auction.nftId}`} key={index} className="p-4 border rounded-lg hover:shadow-lg transition-shadow">
                            <h4 className="text-xl font-medium">NFT ID: {auction.nftId}</h4>
                            <p className="text-gray-600">Starting Bid: {auction.startingBid} ETH</p>
                            <p className="text-gray-600">Ends At: {Number(auction.endAt.toString()) - blockNumber}</p>
                            <p className="text-gray-600">Highest Bid: {auction.highestBid} ETH</p>
                            <p className={`text-sm ${auction.started ? 'text-green-500' : 'text-red-500'}`}>{auction.started ? 'Auction Started' : 'Auction Not Started'}</p>
                            <p className={`text-sm ${auction.ended ? 'text-red-500' : 'text-green-500'}`}>{auction.ended ? 'Auction Ended' : 'Auction Active'}</p>
                        </Link>
                    ))}
                </div>
            ) : (
                <p>No auctions data found.</p>
            )}
        </div>
    );
};
