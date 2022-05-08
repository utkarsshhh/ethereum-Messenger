var myMessage = artifacts.require("Message");

module.exports = function(deployer) {
  deployer.deploy(myMessage);
};