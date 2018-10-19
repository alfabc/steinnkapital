pragma solidity ^0.4.24;

import "openzeppelin-solidity/contracts/token/ERC20/ERC20.sol";
import "openzeppelin-solidity/contracts/token/ERC20/ERC20Detailed.sol";
import "openzeppelin-solidity/contracts/token/ERC20/ERC20Mintable.sol";


/**
 * @title SteinnToken
 * @dev SteinnToken manages 
 */
contract SteinnToken is ERC20, ERC20Detailed, ERC20Mintable {
  constructor(string name, string symbol, uint8 decimals, address minter)
    ERC20Detailed(name, symbol, decimals) ERC20Mintable() ERC20() public {
      addMinter(minter);
  }
}

