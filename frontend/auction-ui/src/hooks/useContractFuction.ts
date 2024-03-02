import { useContractWrite, usePrepareContractWrite } from "wagmi";
import { useState, useEffect } from "react";
import EnglishAuctionABI from "../../constants/abi/EnglishAuction.ts";
import DenverAuctionABI from "../../constants/abi/DenverAuctionNFT.ts";
import { type SendTransactionResult } from "wagmi/actions";
import addresses from "../../constants/deployed_address.ts";
import { sepolia } from "viem/chains";

const useContractFunction = ({
  functionName,
  args,
  smartContractAddress = addresses[sepolia.id]?.AUCTION_ADDRESS,
}: {
  functionName: string;
  args: any[];
  smartContractAddress?: `0x${string}`;
}) => {
  const [status, setStatus] = useState("");
  const [result, setResult] = useState<SendTransactionResult | null>(null);

  const abi =
    smartContractAddress === addresses[sepolia.id]?.AUCTION_ADDRESS
      ? EnglishAuctionABI
      : DenverAuctionABI;

  const { config } = usePrepareContractWrite({
    address: smartContractAddress, // Contract address
    abi,
    functionName,
    chainId: 11155111,
    args,
  });

  const { write, data, isLoading, isSuccess, isError } =
    useContractWrite(config);

  useEffect(() => {
    if (isSuccess && data) {
      setStatus("Transaction successful!");
      setResult(data);
    } else if (isError) {
      setStatus("Transaction failed.");
    }
  }, [isSuccess, isError, data]);

  const execute = () => {
    write?.();
    setStatus("Processing...");
  };

  return { execute, status, result, isLoading };
};

export default useContractFunction;
