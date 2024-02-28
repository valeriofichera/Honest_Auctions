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

    function testMint() public {
        nft.safeMint(address(this), 1); // Mint an NFT
        assertEq(nft.ownerOf(1), address(this)); // Check ownership
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
        auction.create(IERC721(address(nft)), 1, 1 ether, 2 days, 1.5 ether); // Create an auction
        uint auctionId = auction.auctionCount(); // Get the newly created auction ID
        assertTrue(auctionId > 0); // Check that an auction was created

        auction.start(auctionId); // Start the auction
        EnglishAuction.Auction memory auctionInfo = auction.auction_info(auctionId);

        assertTrue(auctionInfo.started); // Check that the auction has started
    }



    function testFailStartAuctionWithoutApproval() public {
        auction.create(IERC721(address(nft)), 1, 1 ether, 2 days, 1.5 ether);
        uint auctionId = auction.auctionCount(); // Assuming create increments count

        vm.expectRevert(); // Expect that the next call will revert
        auction.start(auctionId); // Should fail because the NFT has not been approved for transfer
    }
}
