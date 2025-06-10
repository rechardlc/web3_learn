// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;
contract Primitives {
    bool public boo = true;

    // uint 代表[0, ]
    uint8 public u8 = 1; // 2**8 -1
    uint16 public u16 = 12; // 2**16 - 1
    uint256 public u256 = 256; // 2**256 - 1
    // int [-2**8, 2**8-1]
    int8 public u8_All = -1;
    int256 public u256_all = -256

    
}