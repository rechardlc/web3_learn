// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

// 合约的继承，通过关键字is实现
// 继承从右往左且深度优先的方式继承实现

contract A {
    function foo() public pure virtual returns (string memory) { return "A";}
}
contract B is A {
    function foo() public override pure returns (string memory) {return "B"; }
}
contract C is A {
    // Override A.foo()
    function foo() public pure virtual override returns (string memory) {
        return "C";
    }
}
// contract E is C, B {
//     function foo() public virtual override(C, B) returns (string memory){
//         return super.foo();
//     }
// }