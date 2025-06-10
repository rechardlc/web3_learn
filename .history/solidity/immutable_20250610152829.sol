// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

contract Immutable {
    address public immutable MY_ADDRESS;
    uint public immutable MY_UINT;
    // constructor is only run once when the contract is deployed
    // 类似于Vue的created
    constructor(uint _myUint) {
        MY_ADDRESS = msg.sender;
        MY_UINT = _myUint;
    }

    function doSomething() public pure returns (uint256) {
        return 123;
    }
}