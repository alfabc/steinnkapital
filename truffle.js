/*
 * NB: since truffle-hdwallet-provider 0.0.5 you must wrap HDWallet providers in a
 * function when declaring them. Failure to do so will cause commands to hang. ex:
 * ```
 * mainnet: {
 *     provider: function() {
 *       return new HDWalletProvider(mnemonic, 'https://mainnet.infura.io/<infura-key>')
 *     },
 *     network_id: '1',
 *     gas: 4500000,
 *     gasPrice: 10000000000,
 *   },
 */

module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // to customize your Truffle configuration!
  solc: {
    optimizer: {
      enabled: true,
      runs: 200
    }
  },
  networks: {
    // for ganache-gui
    ganache: {
      host: 'localhost',
      port: 7545,
      network_id: '5777'
    },
    kovan: {
      gas: 4700000,
      host: 'localhost',
      network_id: '42',
      port: 8545
    },
    localhost: {
      host: 'localhost',
      port: 8546,
      network_id: '*'
    },
    mainnet: {
      host: 'localhost',
      port: 8545,
      gas: 4612388,
      network_id: '1',
      from: '0x00C8Bc664147389328Cb56f0b1EDc391c591191f'
    },
    rinkeby: {
      host: 'localhost',
      port: 8545,
      network_id: '4',
      gas: 6700000
    },
    ropsten: {
      host: 'localhost',
      port: 8545,
      gas: 4612388,
      network_id: '3'
    }
  }
}
