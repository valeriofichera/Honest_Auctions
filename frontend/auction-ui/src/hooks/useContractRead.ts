import { useContractRead } from "wagmi";
import EnglishAuctionABI from "../../constants/abi/EnglishAuction.ts";
import { useEffect, useState } from "react";
import addresses from "../../constants/deployed_address.ts";
import { sepolia } from "viem/chains";

const useContractReadFunction = ({
  functionName,
  args,
  smartContractAddress = addresses[sepolia.id]?.AUCTION_ADDRESS,
}: {
  functionName: string;
  args: any[];
  smartContractAddress?: `0x${string}`;
}) => {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const {
    data: readData,
    isError,
    isLoading: readLoading,
  } = useContractRead({
    address: smartContractAddress,
    abi: EnglishAuctionABI, // Assuming reading from English Auction contract, adjust as necessary
    functionName,
    args,
    watch: true, // Re-run the function when args change
  });

  useEffect(() => {
    setIsLoading(readLoading);

    if (readData) {
      setData(readData);
    }

    if (isError) {
      setError("Failed to read data");
    }
  }, [readData, isError, readLoading]);

  return { data, isLoading, error, isError };
};

export default useContractReadFunction;
