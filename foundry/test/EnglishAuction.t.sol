// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import {Test} from "forge-std/Test.sol";
import "../src/DenverAuctionNFT.sol";
import "../src/EnglishAuction.sol";

contract MockERC721Receiver {
    function onERC721Received(
        address,
        address,
        uint256,
        bytes calldata
    ) external pure returns (bytes4) {
        return this.onERC721Received.selector;
    }
}

contract DenverAuctionNFTTest is Test {
    DenverAuctionNFT nft;

    function setUp() public {
        nft = new DenverAuctionNFT(address(this)); // Deploy the NFT contract
    }

    function testFailMintNotOwner() public {
        vm.prank(address(0)); // Simulate call from another address
        nft.safeMint(address(this), 1); // Should fail
    }
}

contract EnglishAuctionTest is Test, MockERC721Receiver {
    EnglishAuction auction;
    DenverAuctionNFT nft;

    function setUp() public {
        nft = new DenverAuctionNFT(address(this)); // Deploy the NFT contract
        nft.safeMint(address(this), 1); // Mint an NFT to this contract
        auction = new EnglishAuction(); // Deploy the auction contract without parameters
    }

    function testCreateAndStartAuction() public {
        nft.approve(address(auction), 1); // Approve the auction contract to take the NFT
        auction.createAndStartAuction(IERC721(address(nft)), 1, 1 ether, 2 days, 1.5 ether); // Correctly call createAndStartAuction
        uint auctionId = auction.auctionCount(); // Get the newly created auction ID
        assertTrue(auctionId > 0, "Auction should be created"); // Check that an auction was created

        EnglishAuction.Auction memory auctionInfo = auction.auction_info(auctionId);
        assertTrue(auctionInfo.started, "Auction should have started"); // Check that the auction has started
    }
}
