pragma solidity ^0.4.24;

import "openzeppelin-solidity/contracts/token/ERC20/ERC20.sol";
import "openzeppelin-solidity/contracts/token/ERC20/ERC20Capped.sol";
import "openzeppelin-solidity/contracts/token/ERC20/ERC20Detailed.sol";


/**
 * @title SteinnToken
 * @dev SteinnToken manages 
 */
contract SteinnToken is ERC20, ERC20Capped, ERC20Detailed {
  constructor(string name, string symbol, uint8 decimals, uint256 cap, address minter)
    ERC20Capped(cap) ERC20Detailed(name, symbol, decimals) ERC20() public {
    addMinter(minter);
  }
}

