import useContractReadFunction from '../../hooks/useContractRead';
import { BigNumber } from 'ethers';

// Define TypeScript interfaces for your auction data
export interface Auction {
    nft: string;
    nftId: string;
    seller: string;
    startingBid: string;
    endAt: string;
    started: boolean;
    ended: boolean;
    highestBidder: string;
    highestBid: string;
    reservePrice: string;
    cancelled: boolean;
  }
  

export const ReadAuction = () => {
    const auctionId = 6; // Specify the auction ID you want to query
    const { data: unformatedData, isLoading, error } = useContractReadFunction({
        functionName: 'auctions',
        args: [auctionId], // Pass auctionId as argument to your contract's 'auctions' function
    });

    const data = unformatedData ? unformatedData as Auction : null;
    // Convert BigNumber to string for rendering
    const formattedData = data ? {
        ...data,
        nftId: data.nftId.toString(),
        startingBid: BigNumber.from(data.startingBid).toString(),
        endAt: BigNumber.from(data.endAt).toString(),
        highestBid: BigNumber.from(data.highestBid).toString(),
        reservePrice: BigNumber.from(data.reservePrice).toString(),
    } : null;

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <div>
            <h3>Auction Details</h3>
            {formattedData ? (
                <div>
                    <p>Auction ID: {auctionId}</p>
                    <p>NFT: {formattedData.nft}</p>
                    <p>NFT ID: {formattedData.nftId}</p>
                    <p>Seller: {formattedData.seller}</p>
                    <p>Starting Bid: {formattedData.startingBid}</p>
                    <p>Ends At: {formattedData.endAt}</p>
                    <p>Started: {formattedData.started ? 'Yes' : 'No'}</p>
                    <p>Ended: {formattedData.ended ? 'Yes' : 'No'}</p>
                    <p>Highest Bidder: {formattedData.highestBidder}</p>
                    <p>Highest Bid: {formattedData.highestBid}</p>
                    <p>Reserve Price: {formattedData.reservePrice}</p>
                    <p>Cancelled: {formattedData.cancelled ? 'Yes' : 'No'}</p>
                </div>
            ) : (
                <p>No auction data found</p>
            )}
        </div>
    );

};
