import { useAccount } from "wagmi";
import { ApproveAuction } from "./web3interact/AssignNFTtoContract";
import { CreateAuction } from "./web3interact/CreateAuction";

function Auctions() {
  const { isConnected } = useAccount();

  if (!isConnected)
    return (
      <>
        <p>Please connect your wallet.</p>
      </>
    );

  return (
    <div>
      <h1>Auctions: </h1>
      <ApproveAuction />
      <CreateAuction />
    </div>
  );
}

export default Auctions;
