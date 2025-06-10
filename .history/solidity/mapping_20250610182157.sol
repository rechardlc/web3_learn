// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;
// 映射是一种键值对存储结构
// Map 类似于javascript的Map结构
contract Mapping {
    mapping(address => uint256) public balances;

    mapping(bytes32 => bool) public flags;


    function getBalance(address _addr) public view returns (uint256) {
        // 获取映射中的值
        return balances[_addr];
    }

    function setBalance(address _addr, uint256 _balance) public {
        // 设置映射中的值
        balances[_addr] = _balance;
    }
      function delAddr(address addr) public  {
        // delete 是将还原初始值，废直接删除
        delete balances[addr];
    }
}