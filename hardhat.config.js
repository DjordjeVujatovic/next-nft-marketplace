require("@nomiclabs/hardhat-waffle");
const fs = require("fs");

const privateKey = fs.readFileSync(".secret").toString().trim();
const projectId = "d6030038b9c0479e86c9f3698733ffbe";

module.exports = {
  networks: {
    hardhat: {
      chainId: 1337,
    },
    mumbai: {
      // put in env variable
      url: `https://polygon-mumbai.infura.io/v3/${projectId}`,
      accounts: [`0x${privateKey}`],
    },
    mainnet: {
      url: `https://polygon-mainnet.infura.io/v3/${projectId}`,
      accounts: [`0x${privateKey}`],
    },
  },
  solidity: "0.8.4",
};
