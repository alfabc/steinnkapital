/* eslint-env node, mocha */
const SteinnToken = artifacts.require('../contracts/SteinnToken.sol')
// const expectThrow = require('./helpers/expectThrow.js')
// const BigNumber = require('bignumber.js')

const should = require('chai') // eslint-disable-line no-unused-vars
  .use(require('chai-as-promised'))
  .should()

contract('SteinnToken', (accounts) => {
  const minter = accounts[1]
  let steinnToken

  context('initialization', () => {
    it('should accept correct constructor arguments', async () => {
      steinnToken = await SteinnToken.new('Steinn Token 1', 'STEINN.1', 0, minter);
      (await steinnToken.name()).should.eq('Steinn Token 1');
      (await steinnToken.symbol()).should.eq('STEINN.1');
      (await steinnToken.decimals()).toNumber().should.eq(0);
      (await steinnToken.isMinter(minter)).should.be.true;
    })
  })
})
