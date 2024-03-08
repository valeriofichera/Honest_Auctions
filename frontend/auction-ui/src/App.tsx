import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";

import LandingPage from "./LandingPage";

import BidFairValue from "./BidFairValue";
import BidHidden from "./BidHidden";

import { getDefaultWallets, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import "@rainbow-me/rainbowkit/styles.css";
import { Buffer } from "buffer";
import { configureChains, createClient, WagmiConfig } from "wagmi";
import {
  arbitrum,
  arbitrumGoerli,
  baseGoerli,
  foundry,
  goerli,
  hardhat,
  polygonMumbai,
  moonbaseAlpha,
  sepolia,
} from "wagmi/chains";
import { infuraProvider } from "wagmi/providers/infura";
import { publicProvider } from "wagmi/providers/public";
import AuctionsPage from "./AuctionsPage";
import CreateAuctionPage from "./CreateAuctionPage";

function App() {
  window.Buffer = Buffer;

	// const fhenix: Chain = {
	// 	id: 42069,
	// 	name: "Fhenix Frontier",
	// 	network: "testnet fhenix",
	// 	iconUrl: "",
	// 	iconBackground: "#000000",
	// 	nativeCurrency: {
	// 		decimals: 18,
	// 		name: "Testnet Fhenix",
	// 		symbol: "tFHE",
	// 	},
	// 	rpcUrls: {
	// 		default: {
	// 			https: ["https://api.testnet.fhenix.zone:7747"],
	// 		},
	// 		public: {
	// 			http: [],
	// 			webSocket: undefined,
	// 		},
	// 	},
	// 	blockExplorers: {
	// 		default: { name: "Testnet Explorer", url: "https://explorer.testnet.fhenix.zone" },
	// 		etherscan: { name: "", url: "" },
	// 	},
	// 	testnet: true,
	// }

  const { chains, provider } = configureChains(
    [
      moonbaseAlpha,
      sepolia,
      goerli,
      arbitrum,
      arbitrumGoerli,
      baseGoerli,
      foundry,
      hardhat,
      polygonMumbai,
    ],
    [
      infuraProvider({ apiKey: "51282d8221e64ba0a0b0e9dd604ea35a" }),
      publicProvider(),
    ],
  );

  const { connectors } = getDefaultWallets({
    appName: "True Price Auctions",
    chains,
  });

  const wagmiClient = createClient({
    autoConnect: true,
    connectors,
    provider,
  });

  const router = createBrowserRouter([
    {
      path: "/",
      element: <LandingPage />,
    },
    {
      path: "/auction",
      element: <AuctionsPage />,
    },
    {
      path: "/create-auction",
      element: <CreateAuctionPage />,
    },
    {
      path: "/auction/hidden/:auctionId",
      element: <BidHidden />,
    },
    {
      path: "/auction/fair-value/:auctionId",
      element: <BidFairValue />,
    },
  ]);

  return (
    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider chains={chains}>
        <div className="selection:bg-[#527BFF] selection:text-[#0B0C15]">
          <RouterProvider router={router} />
        </div>
      </RainbowKitProvider>
    </WagmiConfig>
  );
}

export default App;
