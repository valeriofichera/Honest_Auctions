import { useContractWrite, usePrepareContractWrite } from 'wagmi';
import { useState, useEffect } from 'react';
import EnglishAuctionABI from '../../constants/abi/EnglishAuction.ts';
import { SendTransactionResult } from 'wagmi/actions';

const useContractFunction = (
    { functionName, args }
    : { functionName: string;args: any[] }
  ) => {
  const [status, setStatus] = useState('');
  const [result, setResult] = useState<SendTransactionResult | null>(null);

  const { config } = usePrepareContractWrite({
    address: '0x1EFbd93f7e7F0ccC80fc384A401780189957A7C0', // Consider making this dynamic if needed
    abi: EnglishAuctionABI,
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
