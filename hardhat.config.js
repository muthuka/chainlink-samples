require("@nomiclabs/hardhat-waffle");
require('dotenv').config();
require("@nomiclabs/hardhat-ethers");
require("@nomiclabs/hardhat-etherscan");

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

const { ROPSTEN_API_URL, KOVAN_API_URL, RINKEBY_API_URL, PRIVATE_KEY, ETHERSCAN_API_KEY } = process.env;

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.7",
  defaultNetwork: "kovan",
  networks: {
    hardhat: {},
    ropsten: {
      url: ROPSTEN_API_URL,
      accounts: [`0x${PRIVATE_KEY}`]
    },
    rinkeby: {
      url: RINKEBY_API_URL,
      accounts: [`0x${PRIVATE_KEY}`]
    },
    kovan: {
      url: KOVAN_API_URL,
      accounts: [`0x${PRIVATE_KEY}`]
    }
  },
  etherscan: {
    // Your API key for Etherscan
    // Obtain one at https://etherscan.io/
    apiKey: ETHERSCAN_API_KEY
  },
};
