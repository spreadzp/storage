import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
require('dotenv').config()

const PRIVATE_KEY = process.env.PRIVATE_KEY || '0x'; 
 
const config: HardhatUserConfig = {
  defaultNetwork: "swisstronik",
  solidity: "0.8.19",
  networks: {
    swisstronik: {
      url: "https://json-rpc.testnet.swisstronik.com/",
      accounts: [ `0x${PRIVATE_KEY}`  ], 
    },
    mumbai: {
      url: "https://rpc-mumbai.maticvigil.com/",
      accounts: [ `0x${PRIVATE_KEY}`  ], 
    },
    hardhat: {
       
    },
  },
};

export default config;
