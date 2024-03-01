import { ApproveAuction } from './web3interact/AssignNFTtoContract';
import { CreateAuction } from './web3interact/CreateAuction';
import { ReadAuction } from './web3fetch/ReadAuctions';
import { AllAuctions } from './web3fetch/AllAuctions';
import { useAccount } from 'wagmi';

function Auctions () {
    const { isConnected } = useAccount();


    if (!isConnected) return (
        <>
        <p>Please connect your wallet.</p>
        </>
    );

    return (
        <div>
            <h1>Auctions: </h1>
            <ApproveAuction />
            <CreateAuction />
            <ReadAuction />
            <AllAuctions />
        </div>
    );
}

export default Auctions;