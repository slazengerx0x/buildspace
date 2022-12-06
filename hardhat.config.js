require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

module.exports = {
  solidity: '0.8.17',
  networks: {
    goerli: {
      url: "https://virulent-still-dew.ethereum-goerli.discover.quiknode.pro/5d892eabc92820526559fafdbc455292da6dc280/",
      accounts: [process.env.GOERLI_PRIVATE_KEY],
    },
  },
};