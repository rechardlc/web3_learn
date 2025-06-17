// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;


// payable修饰符：允许函数或者地址接受以太币
contract Payable {
    function pay() public payable {
        // 接收以太币
    }
}