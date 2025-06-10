// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

contract Mapping {
    mapping(address => uint256) public balances;

    function getBalance(address _addr) public view returns (uint256) {
}