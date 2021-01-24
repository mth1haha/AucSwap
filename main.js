var AtomicSwap = artifacts.require("./AtomicSwap.sol");
var Migrations = artifacts.require("./Migrations.sol");

module.exports = function(deployer) {
  deployer.deploy(Migrations);
};


module.exports = function(deployer) {
  deployer.deploy(AtomicSwap);
};
