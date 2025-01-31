// 1. Import ethers
const ethers = require('ethers');

const timeSlotDrex = 20; // in seconds
const drexLeg = 6; // in time slot
const alienConfirmation = 3*drexLeg; // in time slot
const alienExpiration = 2*alienConfirmation; // in time slot
const equalbalance = (10**15); // 18 is the number of decimals

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
const alien = new ethers.JsonRpcProvider(providerRPC.moonbeam.rpc, {
  chainId: providerRPC.moonbeam.chainId,
  name: providerRPC.moonbeam.name,
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

      const ownerAlien = new ethers.Wallet(accounts[0], alien);
      const aliceAlien = new ethers.Wallet(accounts[1], alien);
      const bobAlien = new ethers.Wallet(accounts[2], alien);
      const charlieAlien = new ethers.Wallet(accounts[3], alien);
      const debbieAlien = new ethers.Wallet(accounts[4], alien);
      const evaAlien = new ethers.Wallet(accounts[5], alien);
      const mikeAlien = new ethers.Wallet(accounts[6], alien);

      const alienSigners = [aliceAlien,mikeAlien];

      const owner = new ethers.Wallet(accounts[0], drex);
      const alice = new ethers.Wallet(accounts[1], drex);
      const bob = new ethers.Wallet(accounts[2], drex);
      const charlie = new ethers.Wallet(accounts[3], drex);
      const debbie = new ethers.Wallet(accounts[4], drex);
      const eva = new ethers.Wallet(accounts[5], drex);
      const mike = new ethers.Wallet(accounts[6], drex);

      const drexSigners = [alice,mike]

      const merkleSigners = [bob,charlie,debbie,eva];

      var fs = require('fs');
      //const jsonFile = require ("./artifacts/AlienToken.json");
      const parsed= JSON.parse(fs.readFileSync("./artifacts/AlienToken.json"));
      const abi = parsed.abi;
      
     const alienToken = new ethers.Contract('0x1352C77b6676b62b49D3eA78c8C887070eD44D63', abi, alien);
      
     async function alienSetup () { 

      console.log (await (alienToken.balanceOf(owner.address)));
      
      const tx = await alienToken.connect(owner).transfer(aliceAlien.address, equalbalance);
      console.log (tx.wait().logs[0].args);
      await alienToken.connect(owner).transfer(mikeAlien.address, equalbalance);

        console.log (await (alienToken.balanceOf(aliceAlien.address)));
        console.log (await (alienToken.balanceOf(mikeAlien.address)));

     }

     alienSetup();

      const parsedDrexToken = JSON.parse(fs.readFileSync("./artifacts/DrexToken.json"));
      const abiDrexToken = parsedDrexToken.abi;

      const drexToken = new ethers.Contract('0x4Ca7BE74411B89e4737ef1594Ac47F33C9Ed7175', abi, drex);
      
          console.log ('#######################');
          console.log (drexToken.target);
          console.log ("Owner balance");

          




// https://docs.moonbeam.network/builders/ethereum/libraries/ethersjs




/*
 Deploying Every Contract in every chain
#######################
0x4Ca7BE74411B89e4737ef1594Ac47F33C9Ed7175     DrexToken
#######################
0x1352C77b6676b62b49D3eA78c8C887070eD44D63     AlienToken
#######################
0x5D24C726ce6062AfbC32AceeaF66D525f44354dB     Merkle
#######################
0x03898DAd231A2B9D9eCA58124Ab9e247AFb02bC8     Listrack
#######################
0x4F72A973dc2c10F664B5738b0Ca7Fd3f14f4bcEE     AlienListrack

*/