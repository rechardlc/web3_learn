// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

contract Array {
    uint[] public nums;
    uint[10] public nums2;
    uint[10] public nums3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    // push 添加元素，对于非动态的数组，不能添加元素
    function push(uint _num) public {
        nums.push(_num);
    }
    // pop 删除最后一个元素, 
    function pop() public {
        nums.pop();
    }
    // delete 删除指定索引的元素 不会改变数组长度, 会改变数组中元素的值为初始值
    function deleteElement(uint _index) public {
        delete nums[_index];
    }
    // length 获取数组长度
    function getLength() public view returns (uint) {
        return nums.length;
    }
}