const hre = require("hardhat");
require('dotenv').config();

async function main() {
  // We get the contract to deploy
  const s1 = await hre.ethers.getContractFactory("Sample2");
  const s1deployed = await s1.deploy()
  console.log("Sample1 deployed to:", s1deployed.address);

  
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
