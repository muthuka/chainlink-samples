require("dotenv").config()

const API_URL = process.env.KOVAN_API_URL;
const PUBLIC_KEY = process.env.PUBLIC_KEY;
const PRIVATE_KEY = process.env.PRIVATE_KEY;

const { createAlchemyWeb3 } = require("@alch/alchemy-web3")
const web3 = createAlchemyWeb3(API_URL);

console.log("Connected with", API_URL);

// Let's see the contract ABI json
const contract = require("../artifacts/contracts/Sample1.sol/Sample1.json")
const contractAddress = "0xCD70782c7e20661ae04cf88C12571347c0C3C8F0";
const s1contract = new web3.eth.Contract(contract.abi, contractAddress);

const getLatest = async () => {
    const callresult = await s1contract.methods.getLatestPrice().call()
    .catch((err) => {
        console.log("Failed:", err);
    });
    console.log(`getLatestPrice: ${callresult}`);
}

// Let's do it
getLatest();