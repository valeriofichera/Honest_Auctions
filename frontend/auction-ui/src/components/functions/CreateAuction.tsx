import { useContractWrite, usePrepareContractWrite, useAccount } from 'wagmi';

import EnglishAuctionABI from '../../../constants/abi/EnglishAuction.ts';
import { useEffect, useState } from 'react';

export const CreateAuction = () => {
  const { isConnected } = useAccount();
  const [status, setStatus] = useState('');

  const [nftAddress, setNftAddress] = useState('');
  const [nftId, setNftId] = useState();
  const [startingPrice, setStartingPrice] = useState();
  const [duration, setDuration] = useState();
  const [reservePrice, setReservePrice] = useState();


  
  const { config } = usePrepareContractWrite({
    address: '0xf06E084a84846eBCF3e9BbB6045D5201073FBF0E',
    abi: EnglishAuctionABI,
    functionName: 'createAndStartAuction',
    chainId: 11155111,
    args: [
        nftAddress,
        nftId,
        startingPrice,
        duration,
        reservePrice
    ],
  });

  const { write, data, isLoading, isSuccess, isError } = useContractWrite(config);

  const createAuction = () => {
    write?.();
    setStatus('Processing...'); // Set initial status
  };

    useEffect(() => {
        if (isSuccess) {
            setStatus(`Transaction successful! TX: ${data?.hash}`);
        } else if (isError) {
            setStatus('Transaction failed.');
        }
    }, [isSuccess, isError, data?.hash]);

  return (
    <div className="text-md justify-center flex items-center">
      {isConnected ? (
        <>
        <div className='flex flex-col gap-5'>
        <div className='flex flex-col gap-5'>
            <input
              className='bg-white text-black text-lg font-semibold rounded-lg text-center'
              type="text"
              placeholder='Contract Address'
              value={nftAddress}
              onChange={(e) => setNftAddress(e.target.value)}
            />
            <input
              className='bg-white text-black text-lg font-bold rounded-lg text-center'
              type="string"
              placeholder='NFT ID'
              value={nftId}
              onChange={(e) => setNftId(Number(e.target.value))}
            />
            <input
              className='bg-white text-black text-lg font-bold rounded-lg text-center'
              type="number"
              placeholder='Starting Price in ETH'
              value={startingPrice}
              onChange={(e) => setStartingPrice(Number(e.target.value))}
            />
          <input
              className='bg-white text-black text-lg font-bold rounded-lg text-center'
              type="number"
              value={duration}
              placeholder= 'Duration (in Blocks)'
              onChange={(e) => setDuration(Number(e.target.value))}
            />
            <input
              className='bg-white text-black text-lg font-bold rounded-lg text-center'
              type="number"
              value={reservePrice}
              placeholder= 'Reserve Price'
              onChange={(e) => setReservePrice(Number(e.target.value))}
            />
        </div>
          <button
            className=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded"
            onClick={createAuction}
            disabled={isLoading}
          >
            {isLoading ? 'Creating...' : 'Create Auction'}
          </button>
          <p>{status}</p>
      </div>
        </>
      ) : (
        <p>Please connect your wallet.</p>
      )}
    </div>
  );
};
