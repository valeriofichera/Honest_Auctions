
import './App.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom"

import LandingPage from "./LandingPage";

import BidFairValue from "./BidFairValue";
import BidHidden from "./BidHidden";


import "@rainbow-me/rainbowkit/styles.css"
import { getDefaultWallets, RainbowKitProvider } from "@rainbow-me/rainbowkit"
import { Chain, configureChains, createClient, WagmiConfig } from "wagmi"
import { sepolia, goerli, arbitrum, arbitrumGoerli, baseGoerli, foundry, hardhat, polygonMumbai } from "wagmi/chains"
import { infuraProvider } from "wagmi/providers/infura"
import { publicProvider } from "wagmi/providers/public"
import AuctionsPage from './AuctionsPage';
import CreateAuctionPage from './CreateAuctionPage';
import { Buffer } from 'buffer';

function App() {
	window.Buffer = Buffer;

	// const mantleTestnet: Chain = {
	// 	id: 31337,
	// 	name: "Mantle Testnet",
	// 	network: "hardhat",
	// 	iconUrl: "https://s2.coinmarketcap.com/static/img/coins/64x64/27075.png",
	// 	iconBackground: "#000000",
	// 	nativeCurrency: {
	// 		decimals: 18,
	// 		name: "Mantle Testnet Token",
	// 		symbol: "MNT-T",
	// 	},
	// 	rpcUrls: {
	// 		default: {
	// 			http: ["http://127.0.0.1:8545"],
	// 		},
	// 		public: {
	// 			http: [],
	// 			webSocket: undefined,
	// 		},
	// 	},
	// 	blockExplorers: {
	// 		default: { name: "Testnet Explorer", url: "https://explorer.testnet.mantle.xyz/" },
	// 		etherscan: { name: "SnowTrace", url: "https://snowtrace.io" },
	// 	},
	// 	testnet: true,
	// }

	const { chains, provider } = configureChains(
		[sepolia, goerli, arbitrum, arbitrumGoerli, baseGoerli, foundry, hardhat, polygonMumbai],
		[infuraProvider({ apiKey: "51282d8221e64ba0a0b0e9dd604ea35a" }), publicProvider()]
	)

	const { connectors } = getDefaultWallets({
		appName: "True Price Auctions",
		chains,
	})

	const wagmiClient = createClient({
		autoConnect: true,
		connectors,
		provider,
	})

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
		
	])



	return (
  
		<WagmiConfig client={wagmiClient}>
			<RainbowKitProvider chains={chains}>
				<div className='selection:bg-[#527BFF] selection:text-[#0B0C15]'>
				<RouterProvider router={router} />
				</div>
			</RainbowKitProvider>
		</WagmiConfig>
	)
}

export default App;

