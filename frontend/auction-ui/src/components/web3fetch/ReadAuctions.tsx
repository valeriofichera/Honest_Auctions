import useContractReadFunction from '../../hooks/useContractRead';
import { BigNumber } from 'ethers';
import { useAccount } from 'wagmi';

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
    const { data: unformattedData, isLoading, error } = useContractReadFunction({
        functionName: 'getAuctionsByOwner',
        args: [address],
    });

    // Process and format auction data
    const formattedData = Array.isArray(unformattedData) ? unformattedData.map((auction: Auction) => ({
        ...auction,
        nftId: auction.nftId.toString(),
        startingBid: auction.startingBid.toString(),
        endAt: auction.endAt.toString(),
        highestBid: auction.highestBid.toString(),
        reservePrice: auction.reservePrice.toString(),
    })) : [];

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error: {(error as any).message || 'Unknown error'}</div>;

    return (
        <div>
            <h3>Auction Details for account {address}</h3>
            {formattedData.length > 0 ? (
                formattedData.map((auction, index) => (
                    <div key={index}>
                        <p>NFT ID: {auction.nftId}</p>
                        <p>Seller: {auction.seller}</p>
                        <p>Starting Bid: {auction.startingBid}</p>
                        <p>Ends At: {auction.endAt}</p>
                        <p>Started: {auction.started ? 'Yes' : 'No'}</p>
                        <p>Ended: {auction.ended ? 'Yes' : 'No'}</p>
                        <p>Highest Bidder: {auction.highestBidder}</p>
                        <p>Highest Bid: {auction.highestBid}</p>
                        <p>Reserve Price: {auction.reservePrice}</p>
                        <p>Cancelled: {auction.cancelled ? 'Yes' : 'No'}</p>
                    </div>
                ))
            ) : (
                <p>No auction data found for this account.</p>
            )}
        </div>
    );
};