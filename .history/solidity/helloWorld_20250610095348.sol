
/*
    文件描述：
    第一行告诉你源代码是根据 MIT许可的。第一行告诉你源代码是根据MIT授权的。在默认发布源代码的环境中，机器可读的许可证说明符非常重要。
*/

// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0; // 描述solidity版本：主要作用确保合约不会与新的编译器版本编译，从而导致不同的行为


contract HelloWorld {
    string public greeting = "Hello World";
}


contract SimpleToken {
    mapping(address => uint256) public balances;
    string public name;
    string public symbol;
    uint8 public decimals;
    uint256 public totalSupply;

    event Transfer(address indexed form, address indexed to, uint256 value);
    
}