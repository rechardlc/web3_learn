// SPDX-License-Identifier:MIT
pragma solidity >=0.8.13 <0.9.0;

// 函数修饰符： 用于在函数执行前、中、后执行一些操作 ， 可以用于验证函数调用者、参数、返回值等

contract FuncModifier {

    address public owner;
    bool private _lock;
    constructor() {
        owner = msg.sender;
    }

    // 1. 函数修饰符： 用于在函数执行前执行一些操作
    modifier onlyOwner() {
        // 修饰函数
        require(msg.sender == owner, "Only owner can call this function"); // 这行在函数执行时会执行，判断内容信息
        require(!!_lock, "This function is lock, please wait for !");
        _; // 这个代表着函数体，即上面的判断通过后，这里会执行里面的内容
    }

    modifier lockDoing() {
        _lock = true;
        _;
        _lock = false;
    }

    function changeOwner(address _newOwner) public onlyOwner {
        owner = _newOwner;
    }

    function test() public onlyOwner {
        // 函数体
    }
    // 添加 onlyOwner lockDoing 修饰符
    function lockTest() public onlyOwner lockDoing {
        
    }
}