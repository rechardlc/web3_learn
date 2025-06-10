// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

contract NestMap {
    mapping(address => mapping(address => uint256)) public balances;

    function getBalance(address _addr1, address _addr2) public view returns (uint256) {
        return balances[_addr1][_addr2];
    }

    function setBalance(address _addr1, address _addr2, uint256 _balance) public {
        balances[_addr1][_addr2] = _balance;
    }
    
}