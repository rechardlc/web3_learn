// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Variables {
    string public name = "John";
    uint8 public age = 20;
    bool public isStudent = true;
    address public addr = 0xCA35b7d915458EF540aDe6068dFe2F44E8fa733c;
    bytes32 public hash = keccak256(abi.encodePacked(name, age, isStudent));
}