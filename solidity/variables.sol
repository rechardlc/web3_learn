// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Variables {
    string public text = "Hello World";
    uint256 public num = 123;
    function doSomething() public view {
        uint256 i = 456;
        uint256 timestamp = block.timestamp;
        address sender = msg.sender;
    }
}