import { useContractRead } from 'wagmi';
import EnglishAuctionABI from '../../../constants/abi/EnglishAuction.ts';
import { ENGLISH_AUCTION_ADDRESS_SEPOLIA } from '../../../constants/deployed_address.ts';

function AuctionIdInfo({
  auctionId,
}: { auctionId: number }) {
  const { data, isError, isLoading, error} = useContractRead({
    address: ENGLISH_AUCTION_ADDRESS_SEPOLIA,
    abi: EnglishAuctionABI, // Assuming reading from English Auction contract, adjust as necessary
    functionName: 'auction_info',
    args: [auctionId],
    watch: true, // Re-run the function when args change
});

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error: {error?.message}</div>;
  }

  return (
    <div>
      Auction info: {data?.toString()} {/* Assuming 'data' will be the number of auctions */}
    </div>
  );
}

export default AuctionIdInfo;
