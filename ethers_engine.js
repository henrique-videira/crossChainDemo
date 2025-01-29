// 1. Import ethers
const ethers = require('ethers');

// 2. Define network configurations
const providerRPC = {
  moonbeam: {
    name: 'moonbeam',
    rpc: 'https://rpc.api.moonbase.moonbeam.network', // Insert your RPC URL here
    chainId: 1287, 
  },
  ufrj: {
    name: 'ufrj',
    rpc: 'http://84.247.184.185:8253', // Insert your RPC URL here
    chainId: 381660001, 
  },
  sepolia: {
    name: 'sepolia',
    rpc: 'https://sepolia.infura.io/v3/bdbe3f664e2c4fe09240e7c3cffa1f56', // Insert your RPC URL here
    chainId: 11155111, 
  },
};
// 3. Create ethers provider
const alien = new ethers.JsonRpcProvider(providerRPC.sepolia.rpc, {
  chainId: providerRPC.sepolia.chainId,
  name: providerRPC.sepolia.name,
});
const drex = new ethers.JsonRpcProvider(providerRPC.ufrj.rpc, {
    chainId: providerRPC.ufrj.chainId,
    name: providerRPC.ufrj.name,
  });

const accounts =
    [ '64fcd5bfca4beb158d341ea8729f3572409cd82b3dc8ee938747a3b109bf037e',  // owner
      '95b4154d870c7f4d8be947b20c19eeec9ad5a6fc00fe9c2936fcf06c4149309f',  // alice
      '355138760889ceb11307c098bad2da2414f57e580aa92c92295a196d96f985ef',  // bob
      '3fc855b6cb5bb052c72bab7600dd5b4080c8f2fa0e331be242d2fb787719f018',  // charlie
      'ba15b4f8659e6dbcba29e6ad21483f742d397a90ee9c88ab98bf89f88a58bebd',  // debbie
      '21b07198907e720575b9590478110904c8788a3b508063cae003f0063e565827',  // eva
      '2214a90679770647740e88a649c92f50a428f6fd2264820ecff0a0bb18b8d3b1']; // mike


// https://docs.moonbeam.network/builders/ethereum/libraries/ethersjs