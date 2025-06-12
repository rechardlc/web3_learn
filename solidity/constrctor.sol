// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

/*
    类似于：Vue中的created函数， 在组件创建时执行，后续无法调用
    1. 仅执行一次，在合约部署时执行，后续无法调用
    2. 可以接受参数，参数可以在部署时传入
    3. 可见性： 默认是public， 也可以是internal
    4. 继承性： 如何合约继承其他合约，构造函数会按继承顺序执行
    5. 状态修改：通常用于设置初始值
*/

contract ConstructorFunc {
    address public owner;
    constructor(address _owner) {
        owner = _owner;
    }

    function changeOwner(address _newOwner) public {
        owner = _newOwner;
    }

    function getOwner() public view returns (address) {
        return owner;
    }
}