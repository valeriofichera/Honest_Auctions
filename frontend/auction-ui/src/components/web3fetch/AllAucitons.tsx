import useContractReadFunction from '../../hooks/useContractRead';
import { BigNumber } from 'ethers';
import { useBlockNumber } from 'wagmi';

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

export const AllAuctions = () => {
    const { data: blockNumber, error: blockErr } = useBlockNumber();

    const { data: unformattedData, isLoading, error } = useContractReadFunction({
        functionName: 'getAllAuctions',
        args: [],
    });

    // Process and format auction data
    const formattedData = Array.isArray(unformattedData) ? unformattedData.map((auction: Auction) => ({
        ...auction,
        nftId: auction.nftId.toString(),
        startingBid: BigNumber.from(auction.startingBid).toString(),
        endAt: BigNumber.from(auction.endAt).toString(),
        highestBid: BigNumber.from(auction.highestBid).toString(),
        reservePrice: BigNumber.from(auction.reservePrice).toString(),
    })) : [];

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error: {(error as any).message || 'Unknown error'}</div>;

    return (
        <div>
            <h3>All Auctions</h3>
            {formattedData && formattedData.length > 0 ? (
                formattedData.map((auction, index) => (
                    <div key={index}>
                        <p>NFT: {auction.nft}</p>
                        <p>NFT ID: {auction.nftId}</p>
                        <p>Seller: {auction.seller}</p>
                        <p>Starting Bid: {auction.startingBid}</p>
                        <p>Ends At: {auction.endAt}</p>
                        <p>Remaining Blocks: {blockNumber ? (parseInt(auction.endAt.toString()) - blockNumber) : '-'}</p>
                        <p>Started: {auction.started ? 'Yes' : 'No'}</p>
                        <p>Ended: {auction.ended ? 'Yes' : 'No'}</p>
                        <p>Highest Bidder: {auction.highestBidder}</p>
                        <p>Highest Bid: {auction.highestBid}</p>
                        <p>Reserve Price: {auction.reservePrice}</p>
                        <p>Cancelled: {auction.cancelled ? 'Yes' : 'No'}</p>
                    </div>
                ))
            ) : (
                <p>No auctions data found.</p>
            )}
        </div>
    );
};
