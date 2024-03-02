import { defineComponent } from "vue";

export default defineComponent({
  computed: {
    chainId() {
      return "412345";
    },
    networkRPC() {
      return "https://test01.fhenix.zone/evm";
    },
    explorerURL() {
      return "http://127.0.0.1:4000";
    },
    version() {
      return "0.0.1-alpha";
    },
  },
  data() {
    return {
      //version: "0.0.2-alpha",

      thisIsNotFhenixChainId: false,
      mmChainId: -1,
    };
  },
});
