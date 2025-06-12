// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;


/*
    特性	    storage	            memory	            calldata
    生命周期	永久存储（区块链上）	函数调用期间有效	    仅在外部函数调用期间有效
    存储成本	高（写入区块链）	   中（临时内存）	        低（只读输入数据）
    可写性	    可读写	             可读写	                只读
    默认值	    状态变量默认	      函数参数和局部变量默认	外部函数参数（仅引用类型）
    复制方式	引用传递（指针）	   值传递（复制数据）	    引用传递（指针，不可修改）
*/

// 1. 状态变量默认是storage， 函数参数默认是memory， 外部函数参数默认是calldata
// 2. 主要用于判断是否需要读取，还是写入，还是引用传递，功能越弱，gas越低

contract Store {
      uint256[] public arr;
    mapping(uint256 => address) map;
    struct MyStruct {
        uint256 foo;
    }
    mapping(uint256 => MyStruct) public MyStructs;

    function f() public {
        _f(arr, map, MyStructs[1]);
        MyStruct storage myStorStruct = MyStructs[1];
        MyStruct memory myMemStruct = MyStructs[0];
    }

    function _f(
        uint256[] storage _arr,
        mapping(uint256 => address) storage _map, 
        MyStruct storage _myStrut) internal {
        // dosomething
    }
    function g(uint256[] memory _arr) public returns(uint256[] memory) {
        // do something
    }
    
    function h(uint256[] calldata _arr) external  {
    }
}