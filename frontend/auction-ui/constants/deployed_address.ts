import {
  arbitrumSepolia,
  baseSepolia,
  sepolia,
  polygonMumbai,
  moonbaseAlpha,
} from "viem/chains";

interface ChainId {
  AUCTION_ADDRESS: `0x${string}`;
  NFT_ADDRESS: `0x${string}`;
}

type AddressMapping = Record<number, ChainId>;

// Defining contract addresses for each chain
const addresses: AddressMapping = {
  [sepolia.id]: {
    NFT_ADDRESS: "0x69788155033fFb8BbCE3eAB73c14069608844a22",
    AUCTION_ADDRESS: "0xE2464512e86Fb48807414619CdE2d57Cf88f81c3",
  },
  [polygonMumbai.id]: {
    NFT_ADDRESS: "0x5E2aAF9738678f210c3dd780AD5D969e8313C6C2",
    AUCTION_ADDRESS: "0x6F08F61D707361a60A730105F5F8f38f150bf4a5",
  },
  [baseSepolia.id]: {
    NFT_ADDRESS: "0x105Bef74e3E6A741E6A2362Fd5c50Bd339F9BeDD",
    AUCTION_ADDRESS: "0x463a7b5616e2e005fDe16DB1065A1F375897D22D",
  },
  [moonbaseAlpha.id]: {
    NFT_ADDRESS: "0xD8a30DD377569D5D16a1a84Bf71266d715E2C2f8",
    AUCTION_ADDRESS: "0xd670d02f4EabADd3f34172CdEf7504bf0F6ab56C",
  },
  [arbitrumSepolia.id]: {
    NFT_ADDRESS: "0x105Bef74e3E6A741E6A2362Fd5c50Bd339F9BeDD",
    AUCTION_ADDRESS: "0x463a7b5616e2e005fDe16DB1065A1F375897D22D",
  },
};

// Export the mapping
export default addresses;
