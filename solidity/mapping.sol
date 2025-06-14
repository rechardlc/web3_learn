// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;
// 映射是一种键值对存储结构
// Map 类似于javascript的Map结构
// 不可遍历、存储消耗高、键类型受限
// 键类型只能是基本类型（bytes、string、bool、uint、int、contract），不能是引用类型（数组、结构体、映射）， 值类型可以是任何类型
// 删除操作：delete 是将还原初始值，非直接删除
// 
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
        // delete 是将还原初始值，非直接删除
        delete balances[addr];
    }
}