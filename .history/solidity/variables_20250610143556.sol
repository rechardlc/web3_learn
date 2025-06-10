// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Variables {
    uint256 public num = 1;

    function getNum() public view returns (uint256) {
        return num;
    }
}