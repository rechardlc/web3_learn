// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;


// 常量
// 在任何状态下都不可以修改 contants修饰符
contract Constants {
    address public constant MY_ADDRESS = 0x5B38Da6a701c568545dCfcB03FcB875f56beddC4;
    uint public constant MY_UINT = 123;
}

// constant 可以申明在外部区域，提供其他合约调用