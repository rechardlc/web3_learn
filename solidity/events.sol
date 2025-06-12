// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Events {
    // indexed 索引： 用于快速过滤事件，提高查询效率
    // 最多3个索引， 索引的类型只能是address、bool、uint、bytes32、bytes4-32
    event Log(address indexed sender, string message);
    event AnotherLog();
    function test() public {
        emit Log(msg.sender, "hello world");
        emit Log(msg.sender, "hello evm");
        emit AnotherLog();
    }
}