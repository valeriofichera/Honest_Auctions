import "animate.css";
import "../styles/Animations.css";
import fhenix from "../assets/FheDiagram.svg";
import smile_icon from "../assets/smile_icon.svg";
import personUp_icon from "../assets/personUp_icon.svg";
import basket_icon from "../assets/basket_icon.svg";
import ellipse from "../assets/ellipse.svg";

export default function FheDiagram() {
  return (
    <div className="mt-[300px] pt-12" id="FheAuction">
      <div className="grid grid-rows-1 grid-cols-4 gap-1 md:grid-cols-6 md:gap-2 lg:grid-cols-8 lg:gap-3 xl:grid-cols-12 xl:gap-4">
        <div className="row-start-1 row-span-1 col-start-1 md:col-span-4 text-center flex flex-col">
          <div className="xl:mt-[70px] lg:mt-[-10px]">
            <h1 className="lg:ml-24 xl:ml-32 font-bold text-opacity-90 sm:text-4xl xs:text-3xl text-2xl bg-clip-text text-transparent bg-gradient-to-br from-[#FFFFFF] to-[#8BA2C8]">
              Fair-Value Auctions <br />
            </h1>
            <h2 className="lg:ml-12 xl:ml-28 mt-2 text-sm xs:text-lg bg-clip-text text-transparent bg-gradient-to-b from-white/90 to-[#8BA2C8]">
              made possible with <br />
              fully homomorphic encryption (FHE)
              <br /> powered by Fhenix
            </h2>

            <div className="flex flex-col text-left gap-5 xl:ml-36 lg:ml-2 md:m-8 m-4 ml-8 md:mb-0 mb-[-10px]">
              <div className="flex flex-row mt-5 ">
                <div>
                  <img
                    className="h-[50px]"
                    src={basket_icon}
                    alt="smart contract security tooling"
                  />
                </div>
                <div className="flex flex-col cont">
                  <h2 className="text-lg font-bold">Buy NFTs at fair-value</h2>
                  <h3 className="text-sm">
                    don't letirrationalities be the price driver
                  </h3>
                </div>
              </div>

              <div className="flex flex-row">
                <div>
                  <img
                    className="h-[50px]"
                    src={personUp_icon}
                    alt="risk management tooling for DeFi Protocols"
                  />
                </div>
                <div className="flex flex-col cont">
                  <h2 className="text-lg font-bold">
                    Grow your NFT Collection
                  </h2>
                  <h3 className="text-sm">
                    Every Auction brings new Opportunites
                  </h3>
                </div>
              </div>

              <div className="flex flex-row">
                <div>
                  <img
                    className="h-[50px]"
                    src={smile_icon}
                    alt="AI security simulation engine for web3"
                  />
                </div>
                <div className="flex flex-col cont">
                  <h2 className="text-lg font-bold">Get Lucky</h2>
                  <h3 className="text-sm">
                    Win a hidden gem, a valuable NFT can be drawn
                  </h3>
                </div>
              </div>
            </div>
            <a className="lg:ml-12 xl:ml-24 mt-12 w-[210px] h-[60px] py-[15px] px-[17px] text-2xl font-bold inline-flex justify-center items-center gap-[10px] text-white rounded-[10px] bg-[#527BFF] hover:bg-[#3a3f6d80] hover:text-[#8BA2C8] hover:cursor-pointer">
              Bid on NFTs
            </a>
          </div>
        </div>

        <div className="row-start-1 row-span-1 col-start-1 md:col-start-5 col-span-2 md:mt-24 mt-0 lg:mt-0 lg:col-span-7 items-end justify-center item-hover hidden md:block ">
          <img
            className="xl:w-screen lg:w-screen lg:ml-12 md:block hidden"
            src={fhenix}
            alt="Threshold Diagram"
          />
          <img
            src={ellipse}
            alt="Straightline"
            className="lg:mr-1 absolute w-[1200px] h-[500px] mt-[-500px] z-[-1] opacity-65 item-hover-more"
          />
        </div>
      </div>
      <div className="mt-[70px]"></div>
    </div>
  );
}
