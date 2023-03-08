const UniDAO = artifacts.require("./UniDAO.sol");
module.exports = function(deployer) {
  deployer.deploy(UniDAO,["0xfe6d77EBCb772b65a812436421C0e341cFF72855","0x17a333CDFDa97B3425898259cf235374a4B22711"],{gas:4269222});
}