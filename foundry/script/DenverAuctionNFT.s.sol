// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.19;

import {Script, console} from "forge-std/Script.sol";

contract DenverAuctionNFT is Script {

    address;

    function run() public {
        vm.envUnit("PRIVATE_KEY");
        vm.broadcast();
        function safeMint(address to, uint256 tokenId) public onlyOwner {
            _safeMint(to, tokenId);
        }

    }
}