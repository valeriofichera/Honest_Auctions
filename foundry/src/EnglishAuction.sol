// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

interface IERC721 {
    function safeTransferFrom(address from, address to, uint tokenId) external;

    function transferFrom(address, address, uint) external;
}

contract EnglishAuction {
    struct Auction {
        IERC721 nft;
        uint nftId;
        address payable seller;
        uint startingBid;
        uint endAt;
        bool started;
        bool ended;
        address highestBidder;
        uint highestBid;
        uint reservePrice;
        bool cancelled;
    }

    uint public auctionCount;
    mapping(uint => Auction) public auctions;
    mapping(uint => mapping(address => uint)) public bids;

    event AuctionCreated(uint indexed auctionId, address indexed seller, uint duration, uint reservePrice);
    event Start(uint indexed auctionId);
    event Bid(uint indexed auctionId, address indexed sender, uint amount);
    event Withdraw(uint indexed auctionId, address indexed bidder, uint amount);
    event End(uint indexed auctionId, address winner, uint amount);
    event Cancel(uint indexed auctionId);

    function create(IERC721 _nft, uint _nftId, uint _startingBid, uint _duration, uint _reservePrice) external {
        require(_duration > 0, "Duration should be greater than zero");

        Auction storage auction = auctions[++auctionCount];
        auction.nft = _nft;
        auction.nftId = _nftId;
        auction.seller = payable(msg.sender);
        auction.startingBid = _startingBid;
        auction.endAt = block.timestamp + _duration;
        auction.reservePrice = _reservePrice;

        emit AuctionCreated(auctionCount, msg.sender, _duration, _reservePrice);
    }

    function start(uint _auctionId) external {
        Auction storage auction = auctions[_auctionId];
        require(msg.sender == auction.seller, "Not seller");
        require(!auction.started, "Already started");
        require(!auction.ended, "Already ended");
        require(!auction.cancelled, "Already cancelled");

        auction.nft.transferFrom(msg.sender, address(this), auction.nftId);
        auction.started = true;

        emit Start(_auctionId);
    }

    function bid(uint _auctionId) external payable {
        Auction storage auction = auctions[_auctionId];
        require(auction.started, "Not started");
        require(block.timestamp < auction.endAt, "Ended");
        require(!auction.cancelled, "Cancelled");
        require(msg.value >= auction.startingBid && msg.value > auction.highestBid, "Bid too low");

        if (auction.highestBidder != address(0)) {
            bids[_auctionId][auction.highestBidder] += auction.highestBid;
        }

        auction.highestBidder = msg.sender;
        auction.highestBid = msg.value;

        emit Bid(_auctionId, msg.sender, msg.value);
    }

    function withdraw(uint _auctionId) external {
        uint amount = bids[_auctionId][msg.sender];
        require(amount > 0, "No funds to withdraw");

        bids[_auctionId][msg.sender] = 0;
        payable(msg.sender).transfer(amount);

        emit Withdraw(_auctionId, msg.sender, amount);
    }

    function cancel(uint _auctionId) external {
        Auction storage auction = auctions[_auctionId];
        require(msg.sender == auction.seller, "Not seller");
        require(!auction.ended, "Already ended");
        require(!auction.cancelled, "Already cancelled");

        auction.cancelled = true;
        auction.ended = true; // To prevent restarts
        if (auction.highestBidder != address(0)) {
            // Refund the highest bidder if there was a bid
            bids[_auctionId][auction.highestBidder] += auction.highestBid;
        }

        // Return the NFT to the seller
        auction.nft.safeTransferFrom(address(this), auction.seller, auction.nftId);

        emit Cancel(_auctionId);
    }

    function end(uint _auctionId) external {
        Auction storage auction = auctions[_auctionId];
        require(auction.started, "Not started");
        require(block.timestamp >= auction.endAt || auction.cancelled, "Not ended");
        require(!auction.ended, "Already ended");

        auction.ended = true;
        if (auction.highestBidder != address(0) && auction.highestBid >= auction.reservePrice && !auction.cancelled) {
            // Transfer NFT to the highest bidder and funds to the seller
            auction.nft.safeTransferFrom(address(this), auction.highestBidder, auction.nftId);
            auction.seller.transfer(auction.highestBid);
        } else {
            // No valid bids or auction cancelled, return NFT to seller
            auction.nft.safeTransferFrom(address(this), auction.seller, auction.nftId);
            // Refund the highest bidder if there was a bid
            if (auction.highestBidder != address(0)) {
                bids[_auctionId][auction.highestBidder] += auction.highestBid;
            }
        }

        emit End(_auctionId, auction.highestBidder, auction.highestBid);
    }

    // State check functions
    function auction_info(uint _auctionId) external view returns (Auction memory) {
        return auctions[_auctionId];
    }

    function deposit_balance(uint _auctionId, address user) external view returns (uint) {
        return bids[_auctionId][user];
    }

    function total_auctions() external view returns (uint) {
        return auctionCount;
    }
}
