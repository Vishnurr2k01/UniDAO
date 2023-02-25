const UniDAO = artifacts.require("./UniDAO.sol");
module.exports = function(deployer) {
  deployer.deploy(UniDAO,["0x30A30B1d364f5a7E7fa1A698e30bE489faDb0d37","0x17a333CDFDa97B3425898259cf235374a4B22711"],{gas:4269222});
}