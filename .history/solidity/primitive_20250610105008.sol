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
    int256 public u256_all = -256;

    int256 public minInt = type(int256).min;
    int256 public maxInt = type(int256).max;

    address public addr = 0xCA35b7d915458EF540aDe6068dFe2F44E8fa733c;

    bytes1 a = 0xb5;

    // 默认值

    bool public defaultBool;
    uint256 public defaultUint256;

    int256 public default245;

    address public address
}