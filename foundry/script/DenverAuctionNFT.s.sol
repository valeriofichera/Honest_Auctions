// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import {Script, console} from "forge-std/Script.sol";
import  "../src/DenverAuctionNFT.sol";

contract DeployDenverAuctionNFT is Script {

    function run() public {
        vm.startBroadcast();
        
        // Deploy the DenverAuctionNFT contract with the deployer's address as the initial owner
        DenverAuctionNFT nft = new DenverAuctionNFT(msg.sender);
        console.log("DenverAuctionNFT deployed at:", address(nft));

        vm.stopBroadcast();
    }
}
