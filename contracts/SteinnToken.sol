pragma solidity ^0.4.24;

import "openzeppelin-solidity/contracts/token/ERC20/ERC20.sol";
import "openzeppelin-solidity/contracts/token/ERC20/ERC20Capped.sol";
import "openzeppelin-solidity/contracts/token/ERC20/ERC20Detailed.sol";
import "@alfabc/contract-terms/contracts/ContractTerms.sol";


/**
 * @title SteinnToken
 * @dev SteinnToken manages
 */
contract SteinnToken is ERC20, ERC20Capped, ERC20Detailed, ContractTerms {
  constructor(
    string _name,
    string _symbol,
    uint8 _decimals,
    uint256 _cap,
    address _minter,
    string _termsLocation,
    bytes32 _termsHash
  ) ERC20Capped(_cap) ERC20Detailed(_name, _symbol, _decimals) ERC20() ContractTerms(_termsLocation, _termsHash) public {
    addMinter(_minter);
  }
}

