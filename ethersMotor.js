// abi = JSON.parse('[{"constant":true,"inputs":[{"name":"candidate","type":"bytes32"}],"name":"totalVotesFor","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"candidate","type":"bytes32"}],"name":"validCandidate","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"bytes32"}],"name":"votesReceived","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"candidateList","outputs":[{"name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"candidate","type":"bytes32"}],"name":"voteForCandidate","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"inputs":[{"name":"candidateNames","type":"bytes32[]"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"}]')
// privatekeys for Owner, Alice, Bob, Charlie, Debbie, Eva, Mike
const accounts = [ '64fcd5bfca4beb158d341ea8729f3572409cd82b3dc8ee938747a3b109bf037e',  // owner
    '95b4154d870c7f4d8be947b20c19eeec9ad5a6fc00fe9c2936fcf06c4149309f',  // alice
    '355138760889ceb11307c098bad2da2414f57e580aa92c92295a196d96f985ef',  // bob
    '3fc855b6cb5bb052c72bab7600dd5b4080c8f2fa0e331be242d2fb787719f018',  // charlie
    'ba15b4f8659e6dbcba29e6ad21483f742d397a90ee9c88ab98bf89f88a58bebd',  // debbie
    '21b07198907e720575b9590478110904c8788a3b508063cae003f0063e565827',  // eva
    '2214a90679770647740e88a649c92f50a428f6fd2264820ecff0a0bb18b8d3b1']; // mike

providerSepolia = new ethers.providers.JsonRpcProvider('https://sepolia.infura.io/v3/bdbe3f664e2c4fe09240e7c3cffa1f56');
// const signer = new ethers.Wallet(your_private_key_string, provider);
const alienSigners = new Wallet(accounts, providerSepolia);

const ownerAlien = alienSigners[0];
const aliceAlien = alienSigners[1];
const bobAlien = alienSigners[2];
const charlieAlien = alienSigners[3];
const debbieAlien = alienSigners[4];
const evaAlien = alienSigners[5];
const mikeAlien = alienSigners[6];

var fs = require('fs');
const jsonFile = require ("./artifacts/AlienToken.json");
const parsed= JSON.parse(fs.readFileSync(jsonFile));
const abi = parsed.abi;

alienToken = new ethers.Contract('0x1696f3046Bb0caF1DE2c54D8d07dF65EE3b3d2Ce', abi, ownerAlien);

//const alienTokenFactory = await ethers.getContractFactory("AlienToken");
//const alienToken = alienTokenFactory.attach('0x1696f3046Bb0caF1DE2c54D8d07dF65EE3b3d2Ce');
    console.log ('#######################');
    console.log (alienToken.target);
    console.log ("Owner balance");
    console.log (await (alienToken.balanceOf(ownerAlien.address)));

// candidates = {"Rama": "candidate-1", "Nick": "candidate-2", "Jose": "candidate-3"}

/*
function voteForCandidate(candidate) {
 candidateName = $("#candidate").val();
  console.log(candidateName);

  contract.voteForCandidate(ethers.utils.formatBytes32String(candidateName)).then((f) => {
    let div_id = candidates[candidateName];
    contract.totalVotesFor(ethers.utils.formatBytes32String(candidateName)).then((f) => {
      $("#" + div_id).html(f);
    })
  });
}
  */

$(document).ready(function() {
  
    /*
 candidateNames = Object.keys(candidates);

 for(var i=0; i<candidateNames.length; i++) {
  let name = candidateNames[i];
  contract.totalVotesFor(ethers.utils.formatBytes32String(name)).then((f) => {
    $("#" + candidates[name]).html(f);
  })
 }
  */
});