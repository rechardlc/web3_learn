// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;
// 
// 不可变量
// 只能在constructor中初始化
// 可以在任何状态中读取
contract Immutable {
    address public immutable MY_ADDRESS;
    uint public immutable MY_UINT;
    // constructor is only run once when the contract is deployed
    // 类似于Vue的created钩子函数
    constructor(uint _myUint) {
        MY_ADDRESS = msg.sender;
        MY_UINT = _myUint;
    }

    function doSomething() public pure returns (uint256) {
        return 123;
    }
}