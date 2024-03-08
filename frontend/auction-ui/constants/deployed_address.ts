import {
  arbitrumSepolia,
  baseSepolia,
  lineaTestnet,
  moonbaseAlpha,
  polygonMumbai,
  sepolia,
} from "viem/chains";

interface ChainId {
  AUCTION_ADDRESS: `0x${string}`;
  NFT_ADDRESS: `0x${string}`;
}

type AddressMapping = Record<number, ChainId>;

// Defining contract addresses for each chain
const addresses: AddressMapping = {
  [moonbaseAlpha.id]: {
    NFT_ADDRESS: "0x02FD3b6D34d3A75fa1F921050F15E0e751F6E4c2",
    AUCTION_ADDRESS: "0xBb662E85660813E213E07520d90D647AA10F82A6",
  },
  [polygonMumbai.id]: {
    NFT_ADDRESS: "0x5E2aAF9738678f210c3dd780AD5D969e8313C6C2",
    AUCTION_ADDRESS: "0x6F08F61D707361a60A730105F5F8f38f150bf4a5",
  },
  [baseSepolia.id]: {
    NFT_ADDRESS: "0x105Bef74e3E6A741E6A2362Fd5c50Bd339F9BeDD",
    AUCTION_ADDRESS: "0x463a7b5616e2e005fDe16DB1065A1F375897D22D",
  },
  [sepolia.id]: {
    NFT_ADDRESS: "0xBb662E85660813E213E07520d90D647AA10F82A6",
    AUCTION_ADDRESS: "0xBb662E85660813E213E07520d90D647AA10F82A6",
  },
  [arbitrumSepolia.id]: {
    NFT_ADDRESS: "0x105Bef74e3E6A741E6A2362Fd5c50Bd339F9BeDD",
    AUCTION_ADDRESS: "0x463a7b5616e2e005fDe16DB1065A1F375897D22D",
  },
  [lineaTestnet.id]: {
    NFT_ADDRESS: "0xa3c6d5340c5E362584e05feAa25BeD080b9E23D9",
    AUCTION_ADDRESS: "0x734d21C71D2c83A6651c237315396abb0E789F8c",
  },
};

// Export the mapping
export default addresses;
