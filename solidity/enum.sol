// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;
// 实际开发中，枚举使用量很少，用法跟其他语言类似
contract Enum {
    enum ActionChoices {
        GoLeft,
        GoRight,
        GoUp,
        GoDown
    }
    ActionChoices public choice;
    function doSomething() public {
        choice = ActionChoices.GoLeft;
    }
    function getChoice() public view returns (ActionChoices) {
        return choice;
    }
}