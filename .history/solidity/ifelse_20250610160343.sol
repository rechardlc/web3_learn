// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;
// 跟其他语言一样的语法
// 存在三目运算符
// switch case 语法
contract IfElse {
    function foo(uint x) public pure returns (uint) {
        if (x < 10) {
            return 0;
        } else if (x < 20) {
            return 1;
        } else {
            return 2;
        }
    }
    function bar(uint x) public pure returns (uint) {
        return x < 10 ? 0 : x < 20 ? 1 : 2;
    }
}