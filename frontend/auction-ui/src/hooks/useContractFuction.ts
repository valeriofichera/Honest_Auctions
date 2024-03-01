import { useContractWrite, usePrepareContractWrite } from 'wagmi';
import { useState, useEffect } from 'react';
import EnglishAuctionABI from '../../constants/abi/EnglishAuction.ts';
import DenverAuctionABI from '../../constants/abi/DenverAuctionNFT.ts';
import { SendTransactionResult } from 'wagmi/actions';
import { ENGLISH_AUCTION_ADDRESS_SEPOLIA } from '../../constants/deployed_address.ts';

const useContractFunction = ({ 
    functionName,
    args,
    smartContractAddress = ENGLISH_AUCTION_ADDRESS_SEPOLIA,
} : { 
    functionName: string;
    args: any[] 
    smartContractAddress?: `0x${string}`;
}
  ) => {
  const [status, setStatus] = useState('');
  const [result, setResult] = useState<SendTransactionResult | null>(null);

  const abi = (smartContractAddress === ENGLISH_AUCTION_ADDRESS_SEPOLIA) ? EnglishAuctionABI : DenverAuctionABI;

  const { config } = usePrepareContractWrite({
    address: smartContractAddress, // Contract address
    abi: abi,
    functionName,
    chainId: 11155111,
    args,
  });

  const { write, data, isLoading, isSuccess, isError } = useContractWrite(config);

  useEffect(() => {
    if (isSuccess && data) {
      setStatus('Transaction successful!');
      setResult(data);
    } else if (isError) {
      setStatus('Transaction failed.');
    }
  }, [isSuccess, isError, data]);

  const execute = () => {
    write?.();
    setStatus('Processing...');
  };

  return { execute, status, result, isLoading };
};


export default useContractFunction;
