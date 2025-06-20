// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

/*
    数组跟其他语言类似，具有迭代效果，但是数组是静态的，不能动态添加元素
    数组分为动态数组和定长数组
    动态数组：长度不固定，可以动态添加元素
    定长数组：长度固定，不能动态添加元素
    数组类型：uint[]、uint[10]、uint256[]、uint256[10]
    数组类型：uint[]、uint[10]、uint256[]、uint256[10]
    切片：数组的一部分，可以动态添加元素
    切片类型：uint[]、uint[10]、uint256[]、uint256[10]
    切片类型：uint[]、uint[10]、uint256[]、uint256[10]
*/
contract Array {
    uint[] public nums;
    uint[10] public nums2;
    uint[10] public nums3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    uint[2][3] public nums4 = [[1, 2], [3, 4], [5, 6]]; // 二维数组中：[2][3]表示3行2列， 大部分其他语言表示2行3列
    // push 添加元素，对于非动态的数组，不能添加元素
    function push(uint _num) public {
        nums.push(_num);
    }
    // pop 删除最后一个元素, 对于非动态的数组，不能删除元素
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
/*
    其实大部分计算语言底层实现方式：将需要删除的元素位置置空，然后后面的元素往前顶，最后删除最后一个元素
    EVM虚拟机本质是一个栈结构：遵循先进后出原则
    对于数组其中一个元素的删除，采用迭代的方式删除，
    for(uint i = index; i < arr.length -1; i++) {
        arr[i] = arr[i+1]
    }
    arr.pop() // 最后一个元素采用pop弹出
*/