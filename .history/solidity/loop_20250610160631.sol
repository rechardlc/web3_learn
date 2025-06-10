// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

contract Loop {
    function loop() public pure returns (uint) {
        uint i = 0;
        while (i < 10) {
            i++;
        }
        return i;
    }

    function forLoop() public pure returns (uint) {
        uint sum = 0;
        for (uint i = 0; i < 10; i++) {
            sum += i;
        }
        return sum;
    }

    function doWhileLoop() public pure returns (uint) {
        uint i = 0;
        do {
            i++;
        } while (i < 10);
        return i;
    }

    function breakLoop() public pure returns (uint) {
        uint i = 0;
        while (i < 10) {
            i++;
            if (i == 5) {
                break;
            }
        }
        return i;
    }

    function continueLoop() public pure returns (uint) {
        uint i = 0;
        while (i < 10) {
            i++;
            if (i == 5) {
}