const EnglishAuctionABI = [
  {
    type: "function",
    name: "auctionCount",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "auction_info",
    inputs: [
      {
        name: "_auctionId",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    outputs: [
      {
        name: "",
        type: "tuple",
        internalType: "struct EnglishAuction.Auction",
        components: [
          {
            name: "nft",
            type: "address",
            internalType: "contract IERC721",
          },
          {
            name: "nftId",
            type: "uint256",
            internalType: "uint256",
          },
          {
            name: "seller",
            type: "address",
            internalType: "address payable",
          },
          {
            name: "startingBid",
            type: "uint256",
            internalType: "uint256",
          },
          {
            name: "endAt",
            type: "uint256",
            internalType: "uint256",
          },
          {
            name: "started",
            type: "bool",
            internalType: "bool",
          },
          {
            name: "ended",
            type: "bool",
            internalType: "bool",
          },
          {
            name: "highestBidder",
            type: "address",
            internalType: "address",
          },
          {
            name: "highestBid",
            type: "uint256",
            internalType: "uint256",
          },
          {
            name: "reservePrice",
            type: "uint256",
            internalType: "uint256",
          },
          {
            name: "cancelled",
            type: "bool",
            internalType: "bool",
          },
        ],
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "auctions",
    inputs: [
      {
        name: "",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    outputs: [
      {
        name: "nft",
        type: "address",
        internalType: "contract IERC721",
      },
      {
        name: "nftId",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "seller",
        type: "address",
        internalType: "address payable",
      },
      {
        name: "startingBid",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "endAt",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "started",
        type: "bool",
        internalType: "bool",
      },
      {
        name: "ended",
        type: "bool",
        internalType: "bool",
      },
      {
        name: "highestBidder",
        type: "address",
        internalType: "address",
      },
      {
        name: "highestBid",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "reservePrice",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "cancelled",
        type: "bool",
        internalType: "bool",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "bid",
    inputs: [
      {
        name: "_auctionId",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    outputs: [],
    stateMutability: "payable",
  },
  {
    type: "function",
    name: "bids",
    inputs: [
      {
        name: "",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "",
        type: "address",
        internalType: "address",
      },
    ],
    outputs: [
      {
        name: "",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "cancel",
    inputs: [
      {
        name: "_auctionId",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "createAndStartAuction",
    inputs: [
      {
        name: "_nft",
        type: "address",
        internalType: "contract IERC721",
      },
      {
        name: "_nftId",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "_startingBid",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "_duration",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "_reservePrice",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "deposit_balance",
    inputs: [
      {
        name: "_auctionId",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "user",
        type: "address",
        internalType: "address",
      },
    ],
    outputs: [
      {
        name: "",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "end",
    inputs: [
      {
        name: "_auctionId",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "getAllAuctions",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "tuple[]",
        internalType: "struct EnglishAuction.Auction[]",
        components: [
          {
            name: "nft",
            type: "address",
            internalType: "contract IERC721",
          },
          {
            name: "nftId",
            type: "uint256",
            internalType: "uint256",
          },
          {
            name: "seller",
            type: "address",
            internalType: "address payable",
          },
          {
            name: "startingBid",
            type: "uint256",
            internalType: "uint256",
          },
          {
            name: "endAt",
            type: "uint256",
            internalType: "uint256",
          },
          {
            name: "started",
            type: "bool",
            internalType: "bool",
          },
          {
            name: "ended",
            type: "bool",
            internalType: "bool",
          },
          {
            name: "highestBidder",
            type: "address",
            internalType: "address",
          },
          {
            name: "highestBid",
            type: "uint256",
            internalType: "uint256",
          },
          {
            name: "reservePrice",
            type: "uint256",
            internalType: "uint256",
          },
          {
            name: "cancelled",
            type: "bool",
            internalType: "bool",
          },
        ],
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "getAuctionsByOwner",
    inputs: [
      {
        name: "owner",
        type: "address",
        internalType: "address",
      },
    ],
    outputs: [
      {
        name: "",
        type: "tuple[]",
        internalType: "struct EnglishAuction.Auction[]",
        components: [
          {
            name: "nft",
            type: "address",
            internalType: "contract IERC721",
          },
          {
            name: "nftId",
            type: "uint256",
            internalType: "uint256",
          },
          {
            name: "seller",
            type: "address",
            internalType: "address payable",
          },
          {
            name: "startingBid",
            type: "uint256",
            internalType: "uint256",
          },
          {
            name: "endAt",
            type: "uint256",
            internalType: "uint256",
          },
          {
            name: "started",
            type: "bool",
            internalType: "bool",
          },
          {
            name: "ended",
            type: "bool",
            internalType: "bool",
          },
          {
            name: "highestBidder",
            type: "address",
            internalType: "address",
          },
          {
            name: "highestBid",
            type: "uint256",
            internalType: "uint256",
          },
          {
            name: "reservePrice",
            type: "uint256",
            internalType: "uint256",
          },
          {
            name: "cancelled",
            type: "bool",
            internalType: "bool",
          },
        ],
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "getNftBuyer",
    inputs: [
      {
        name: "nftId",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    outputs: [
      {
        name: "",
        type: "address",
        internalType: "address",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "isAuctionOver",
    inputs: [
      {
        name: "_auctionId",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    outputs: [
      {
        name: "",
        type: "bool",
        internalType: "bool",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "ownerToAuctions",
    inputs: [
      {
        name: "",
        type: "address",
        internalType: "address",
      },
      {
        name: "",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    outputs: [
      {
        name: "",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "total_auctions",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "withdraw",
    inputs: [
      {
        name: "_auctionId",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "event",
    name: "AuctionCreatedAndStarted",
    inputs: [
      {
        name: "auctionId",
        type: "uint256",
        indexed: true,
        internalType: "uint256",
      },
      {
        name: "seller",
        type: "address",
        indexed: true,
        internalType: "address",
      },
      {
        name: "duration",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
      {
        name: "reservePrice",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "Bid",
    inputs: [
      {
        name: "auctionId",
        type: "uint256",
        indexed: true,
        internalType: "uint256",
      },
      {
        name: "sender",
        type: "address",
        indexed: true,
        internalType: "address",
      },
      {
        name: "amount",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "Cancel",
    inputs: [
      {
        name: "auctionId",
        type: "uint256",
        indexed: true,
        internalType: "uint256",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "End",
    inputs: [
      {
        name: "auctionId",
        type: "uint256",
        indexed: true,
        internalType: "uint256",
      },
      {
        name: "winner",
        type: "address",
        indexed: false,
        internalType: "address",
      },
      {
        name: "amount",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "Withdraw",
    inputs: [
      {
        name: "auctionId",
        type: "uint256",
        indexed: true,
        internalType: "uint256",
      },
      {
        name: "bidder",
        type: "address",
        indexed: true,
        internalType: "address",
      },
      {
        name: "amount",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
    ],
    anonymous: false,
  },
];

export default EnglishAuctionABI;
