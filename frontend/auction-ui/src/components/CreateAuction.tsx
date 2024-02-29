import { useContractWrite, usePrepareContractWrite, useAccount } from 'wagmi';

import EnglishAuctionABI from '../../constants/abi/EnglishAuction.ts';

export const CreateAuction = () => {
  const { isConnected } = useAccount();

  const nft_address = '0x1EFbd93f7e7F0ccC80fc384A401780189957A7C0';
  const nft_id = 1;
  const starting_price = 1;
  const duration = 100;
  const reserve_price = 3;
  
  const { config } = usePrepareContractWrite({
    address: '0x1EFbd93f7e7F0ccC80fc384A401780189957A7C0',
    abi: EnglishAuctionABI,
    functionName: 'create',
    chainId: 11155111,
    args: [
        nft_address,
        nft_id,
        starting_price,
        duration,
        reserve_price
    ],
  });

  const { write } = useContractWrite(config);

  return (
    <div className="text-md justify-center flex items-center">
      {isConnected && (
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => write?.()}
        >
          Create Auction
        </button>
      )}
    </div>
  );
};
