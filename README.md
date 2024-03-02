![Logo](./images/Logo.svg)
# Honest Auctions

**Honest Auctions** is a novel NFT Auction Platform designed to revolutionize the way NFT auctions are conducted through the use of Fully Homomorphic Encryption (FHE).

### How FHE Makes Our dApp Special:

- **Privacy**: All bids, as well as TokenURIs, are encrypted and only revealed to the auction winner, maintaining complete privacy throughout the bidding process.
- **No FOMO**: Bidders do not see other people's bids, eliminating the Fear Of Missing Out (FOMO) and ensuring a fair bidding environment.
- **GameFi Experience**: Provides a card unpacking-like experience where NFTs are revealed only after the auction ends, adding an element of surprise and excitement.
- **User-Friendly**: Features an intuitive UI focused on appealing to the consumer market, ensuring a seamless experience for all users.

### Fair-Value Price Discovery Through Encryption

Our platform ensures fair-value price discovery through the innovative use of encryption, offering a unique and equitable environment for NFT auctions.

## Folder Structure:

- `/foundry`: Main smart contract deployed on all chains.
- `/frontend/auction-ui`: Frontend application for interacting with the smart contract.
- `/fhenix`: Smart contract specifically created for the Fhenix blockchain.

## Project Images

Below are the screenshots for the project: 

![Screenshot 1](./images/Screenshot%202024-03-02%20at%2008.55.14.png)
![Screenshot 2](./images/Screenshot%202024-03-02%20at%2008.54.18.png)
![Screenshot 3](./images/Screenshot%202024-03-02%20at%2008.54.25.png)
![Screenshot 4](./images/Screenshot%202024-03-02%20at%2008.54.31.png)
![Screenshot 5](./images/Screenshot%202024-03-02%20at%2008.54.40.png)
![Screenshot 6](./images/Screenshot%202024-03-02%20at%2008.55.34.png)
![Screenshot 7](./images/Screenshot%202024-03-02%20at%2008.55.43.png)
![Screenshot 8](./images/Screenshot%202024-03-02%20at%2008.54.47.png)
![Screenshot 9](./images/Screenshot%202024-03-02%20at%2008.55.52.png)
![Screenshot 10](./images/Screenshot%202024-03-02%20at%2008.55.59.png)

## Deployed Contracts on Various Chains

Below is a list of chains where our smart contracts have been deployed along with their corresponding addresses:

```typescript
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
  [lineaTestnet.id]: {
    NFT_ADDRESS: "0xa3c6d5340c5E362584e05feAa25BeD080b9E23D9",
    AUCTION_ADDRESS: "0x734d21C71D2c83A6651c237315396abb0E789F8c",
  },
};
```

We invite you to explore our platform and experience the future of NFT auctions!
```

### Recommendations for Further Improvement:

1. **Quick Start Guide**: Include a "Getting Started" section with instructions on how users can start using your dApp, including any necessary setup or configuration steps.

2. **Contribution Guidelines**: If your project is open source, include contribution guidelines to encourage community contributions.

3. **License**: Specify the license under which the project is released, which informs users about what they can and cannot do with your code.

4. **Contact Information**: Provide contact information or links to community channels (like Discord, Telegram, or Twitter) for users who have questions or need support.

5. **FAQ or Troubleshooting Section**: Address common questions or issues users might encounter.
