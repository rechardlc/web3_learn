// SPDX-License-Identifier:MIT
pragma solidity >=0.8.13 <0.9.0;



contract Function {

    // 使用pure 和 view修饰符，均不会读取区块链上的任何变量，降低gas消耗

    uint public umb = 88;
    // pure 本地调用不会消耗gas
    function returnMany() pure public returns(uint, bool, uint) {
        return (1, true, 22); // 返回格式：类似于golang
    }
    // view 本地调用不会消耗gas，返回值定义：可以带参数，可以不带参数，带参数方便调用时获取返回值
    function returnMany2() view public returns(uint x, bool b, uint y) {
        // 返回值如函数申明类似，通过括号返回
        return (umb, false, 99);
    }
    // 对于指定的返回值：可以不用显示的return，类似golang的返回形式
    function returnMany3() pure public returns(uint x, bool b, uint y) {
        x = 1;
        b = false;
        y = 99;
    }

    // 对于不需要的返回值，可以直接去掉,语法跟golang类似
    
    function getReturnValue() view public returns(bool, uint){
        (, bool b, uint y) = returnMany2();
        return (b, y);
    }


}