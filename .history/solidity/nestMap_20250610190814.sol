// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;
// 嵌套映射
// 映射的值也可以是映射
// 键类型只能是基本类型，不能是引用类型（数组、结构体、映射）， 值类型可以是任何类型
// 删除操作：delete 是将还原初始值，非直接删除
contract NestMap {
    // mapping可以作为值类型，也可以作为键类型
    mapping(address => mapping(address => uint256)) public balances;

    function getBalance(address _addr1, address _addr2) public view returns (uint256) {
        return balances[_addr1][_addr2];
    }

    function setBalance(address _addr1, address _addr2, uint256 _balance) public {
        balances[_addr1][_addr2] = _balance;
    }
    
}