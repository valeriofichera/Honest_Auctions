import { useParams } from "react-router-dom";
import usdc from "../../assets/usdc.svg";

const BidNonFunctional = () => {
  const { auctionId } = useParams();

  if (auctionId)
    return (
      <>
        <div className="flex flex-col gap-5 justify-center items-center">
          <div className="text-3xl font-light">Participate in Auction</div>
          <div className="flex flex-row gap-2 ml-[-33px]">
            <img className="w-8 " src={usdc} alt="" />

            <input
              className="py-[10px] bg-white text-black text-lg font-bold rounded-lg text-center"
              type="text"
              placeholder="Enter Amount in ETH"
            />
          </div>
          <a
            // Updated condition to check for empty string and parse amount as float for comparison
            className="w-[210px] h-[50px] py-[10px] px-[17px] text-2xl font-bold inline-flex justify-center items-center gap-[10px] text-white rounded-[10px] bg-[#527BFF] hover:bg-[#3a3f6d80] hover:text-[#8BA2C8] hover:cursor-pointer"
          >
            Place a Bid
          </a>
        </div>
      </>
    );
};

export default BidNonFunctional;
