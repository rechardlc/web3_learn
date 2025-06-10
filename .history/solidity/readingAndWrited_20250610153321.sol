// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

contract ReadingAndWrited {
    uint256 public num;

    function setNum(uint256 _num) public {
        num = _num;
    }
}