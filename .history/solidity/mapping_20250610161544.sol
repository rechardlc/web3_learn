// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;
// 映射是一种键值对存储结构
// Map 类似于javascript的Map结构
contract Mapping {
    mapping(address => uint256) public balances;

    function getBalance(address _addr) public view returns (uint256) {
        return balances[_addr];
    }

    function setBalance(address _addr, uint256 _balance) public {
        balances[_addr] = _balance;
    }
}