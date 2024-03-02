import EventBus from "../event-bus";
import CommonProps from "./CommonProps";
import { ethers } from "ethers";
import { FhenixClient } from "fhenixjs";
import { defineComponent } from "vue";

const ERROR_CHAIN_DOES_NOT_EXIST = 4902;

export var provider = null;
export var account = null;
export var client = null;

export default defineComponent({
  mixins: [CommonProps],
  data() {
    return {
      connected: false,
      eventWasAdded: false,
    };
  },
  computed: {},
  mounted() {
    const asyncMount = async () => {
      if (typeof window.ethereum !== "undefined") {
        await this.connect();
        EventBus.emitEvent("network:connected", true);
      }
    };
    asyncMount();
  },
  methods: {
    async addFhenixChain() {
      try {
        if (provider !== null) {
          const chainData = [
            {
              chainId: "0x" + Number(this.chainId).toString(16),
              chainName: "Fhenix Network",
              nativeCurrency: { name: "FHE Token", symbol: "FHE", decimals: 18 },
              rpcUrls: [this.networkRPC],
              blockExplorerUrls: [this.explorerURL],
            },
          ];
          await provider.send("wallet_addEthereumChain", chainData);
          console.log("Custom network added");
        }
      } catch (addError) {
        console.error("Error adding custom network:", addError);
      }
    },
    async switchEthereumChain(chainId) {
      try {
        if (!provider) {
          return;
        }

        await provider.send("wallet_switchEthereumChain", [{ chainId: "0x" + chainId.toString(16) }]);
        console.log("Switched to network:", chainId);
      } catch (switchError) {
        console.error("Error switching networks:", switchError);
        if (switchError instanceof Error) {
          const errorDetails = switchError.error; // Using any to access nested properties

          if (errorDetails && errorDetails.code === ERROR_CHAIN_DOES_NOT_EXIST) {
            this.addFhenixChain();
          }
        }
      }
    },

    async getBalance(provider) {
      try {
        const signer = await provider.getSigner();
        const address = await signer.getAddress();
        const balance = await provider.getBalance(address);
        console.log(`Balance: ${Number(ethers.formatEther(balance))} ETH`);
      } catch (error) {
        console.error("Error getting balance:", error);
      }
    },

    async setupMetaMaskListeners() {
      window.ethereum.on("accountsChanged", async (accounts) => {
        console.log("Account changed:", accounts[0]);
        provider = new ethers.BrowserProvider(window.ethereum);
        account = await window.ethereum.request({ method: "eth_requestAccounts" })[0];
        client = new FhenixClient({ provider });
      });

      // Listen for chain changes
      window.ethereum.on("chainChanged", async (chainId) => {
        console.log("Network changed to:", chainId);
        this.mmChainId = Number(chainId);
        provider = new ethers.BrowserProvider(window.ethereum);
        account = await window.ethereum.request({ method: "eth_requestAccounts" })[0];
        client = new FhenixClient({ provider });
        this.thisIsNotFhenixChainId = Number(chainId) !== Number(this.chainId);
      });
    },

    async connect() {
      try {
        if (provider == null) {
          provider = new ethers.BrowserProvider(window.ethereum);
          account = await window.ethereum.request({ method: "eth_requestAccounts" })[0];
          client = new FhenixClient({ provider });
        }

        const chainId = await provider.send("eth_chainId", []);

        if (Number(chainId) !== Number(this.chainId)) {
          await this.addFhenixChain();
        }
        this.mmChainId = Number(chainId);

        await this.switchEthereumChain(Number(this.chainId));

        if (!this.eventWasAdded) {
          this.eventWasAdded = true;
          this.setupMetaMaskListeners();
        }
      } catch (err) {
        console.error("Error:", err);
      }
    },
  },
});
