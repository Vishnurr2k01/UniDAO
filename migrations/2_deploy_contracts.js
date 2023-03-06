const UniDAO = artifacts.require("./UniDAO.sol");
module.exports = function(deployer) {
  deployer.deploy(UniDAO,["0xAa33Bb036F221546Ec433A2E5c6cBbDeB4d35B8E","0x17a333CDFDa97B3425898259cf235374a4B22711"],"0xE041608922d06a4F26C0d4c27d8bCD01daf1f792",{gas:4569222});
}