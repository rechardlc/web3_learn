// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

contract Array {
    uint[] public nums;
    uint[10] public nums2;
    uint[10] public nums3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    // push 添加元素
    function push(uint _num) public {
        nums.push(_num);
    }
    // pop 删除最后一个元素
    function pop() public {
        nums.pop();
    }
    // de
}