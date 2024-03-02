import { useState } from "react";
import { useContractWrite, usePrepareContractWrite } from "wagmi";
import EnglishAuctionABI from "../../../constants/abi/EnglishAuction";
import { EnglishAuctionContract } from "../../../constants/contract/EnglishAuction";
import { parseEther } from "viem";

const Bid = () => {
  const contractAddress = EnglishAuctionContract().sepolia;
  const contractAbi = EnglishAuctionABI;
  const [amount, setAmount] = useState<string>("");
  const [auctionID, setAuctionID] = useState<string>("");

  const handleInputChangeAmount = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setAmount(event.target.value);
  };

  const handleInputChangeAuctionID = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setAuctionID(event.target.value);
  };

  const { config: depositConfig, error: depositError } =
    usePrepareContractWrite({
      address: contractAddress as `0x{string}`,
      abi: contractAbi,
      functionName: "deposit_balance",
      args: [parseEther(amount), parseEther(auctionID)],
    });
  const { write: deposit } = useContractWrite(depositConfig);

  depositError && console.log(depositError);

  return (
    <>
      <input
        className="py-[10px] bg-white text-black text-lg font-bold rounded-lg text-center"
        type="text"
        placeholder="Enter Amount in ETH"
        value={auctionID}
        onChange={handleInputChangeAuctionID}
      />

      <input
        className="py-[10px] bg-white text-black text-lg font-bold rounded-lg text-center"
        type="text"
        placeholder="Enter Amount in ETH"
        value={amount}
        onChange={handleInputChangeAmount}
      />

      <button
        disabled={!deposit || amount === "" || parseFloat(amount) <= 0} // Updated condition to check for empty string and parse amount as float for comparison
        onClick={() => deposit?.()}
        className="w-[210px] h-[50px] py-[10px] px-[17px] text-2xl font-bold inline-flex justify-center items-center gap-[10px] text-white rounded-[10px] bg-[#527BFF] hover:bg-[#3a3f6d80] hover:text-[#8BA2C8] hover:cursor-pointer"
      >
        Place a Bid
      </button>
    </>
  );
};

export default Bid;
