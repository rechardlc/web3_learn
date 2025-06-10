
/*
    文件描述：
    第一行告诉你源代码是根据 MIT许可的。第一行告诉你源代码是根据MIT授权的。在默认发布源代码的环境中，机器可读的许可证说明符非常重要。
    1. 明确法律合规性：明确代码的版权许可方式，帮助开发者遵循开源协议
    2. 工具识别
    3. 平台要求
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
    // 在合约创建时被执行（init）
    constructor(
        string memory _name,
        string memory _symbol,
        uint8 _decimals,
        uint256 _initialSupply
    ){
        name = _name;
        symbol = _symbol;
        decimals = _decimals;
        totalSupply = _initialSupply;
        balances[msg.sender] = _initialSupply;
    }
    function transfer(address _to, uint256 _value) public retruns (bool) {
        require(balances[msg.sender] >= _value, "余额不足");
        balances[msg.sender] -= _value;
        balances[_to] += _value;
        emit Transfer(msg.sender, _to, _value);
        return true;
    }
}