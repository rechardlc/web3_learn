// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

contract Loop {
    function loop() public pure returns (uint) {
        uint i = 0;
        while (i < 10) {
            i++;
        }
    }
}