const SteinnToken = artifacts.require('SteinnToken')

module.exports = function (deployer) { // eslint-disable-line func-names
  // Create SteinnToken, passing in the name, symbol, decimals, cap, and the minter
  deployer.deploy(SteinnToken, 'Steinn Token 1', 'STEINN.1', 0, 2000, '0x00C8Bc664147389328Cb56f0b1EDc391c591191f')
}
