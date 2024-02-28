// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import {Test, console} from "forge-std/Test.sol";
import "../lib/openzeppelin-contracts/contracts/token/ERC721/ERC721.sol";
import "../src/DenverAuctionNFT.sol";
import "../src/EnglishAuction.sol";

contract MockERC721Receiver is IERC721Receiver {
    function onERC721Received(
        address,
        address,
        uint256,
        bytes calldata
    ) external pure override returns (bytes4) {
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
        assertEq(nft.ownerOf(1), address(this));
    }

    function testFailMintNotOwner() public {
        DenverAuctionNFT notOwnerNFT = new DenverAuctionNFT(address(0)); // Deploy with different owner
        notOwnerNFT.safeMint(address(this), 1); // Should fail
    }
}

contract EnglishAuctionTest is Test, MockERC721Receiver {
    EnglishAuction auction;
    DenverAuctionNFT nft;

    function setUp() public {
        nft = new DenverAuctionNFT(address(this)); // Deploy the NFT contract
        nft.safeMint(address(this), 1); // Mint an NFT to this contract
        auction = new EnglishAuction(IERC721(address(nft)), 1, 1 ether, 2 days, 1.5 ether); // Deploy the auction contract
    }

    function testCreateAuction() public {
        nft.approve(address(auction), 1); // Approve the auction contract to take the NFT
        auction.create(IERC721(address(nft)), 1, 1 ether, 2 days, 1.5 ether); // Create an auction
        assertTrue(auction.auctionCount() > 0); // Check that an auction was created
    }

    function testStartAuction() public {
        nft.approve(address(auction), 1);
        auction.create(IERC721(address(nft)), 1, 1 ether, 2 days, 1.5 ether);
        auction.start(1); // Start the auction
        (,,,,bool started,,,) = auction.auction_info(1);
        assertTrue(started); // Check that the auction has started
    }

    function testFailStartAuctionWithoutApproval() public {
        auction.create(IERC721(address(nft)), 1, 1 ether, 2 days, 1.5 ether);
        auction.start(1); // Should fail because the NFT has not been approved for transfer
    }

}

