require('dotenv').config();
const HDWalletProvider = require('@truffle/hdwallet-provider');
const {INFURA_API_KEY,MNEMONIC} = process.env;
module.exports = {


  networks: {
    development: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*"
    },
    goerli: {
      provider: () => new HDWalletProvider(MNEMONIC,INFURA_API_KEY),
      network_id: 5,
      confirmations: 2,
      networkCheckTimeout: 100000,
      timeoutBlocks: 2000,
      skipDryRun: true
    }
  },

  mocha: {
    // timeout: 100000
  },

  // Configure your compilers
  compilers: {
    solc: {
      version: "0.8.17" ,
      optimizer: {
        enabled: true,
        runs: 200
      }
   
    }
  }


};
