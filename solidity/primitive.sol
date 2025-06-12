// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

/*
    布尔类型默认值false
    uint、int等默认值：0
    注意： solidity 中没有float和double类型，只有int和uint类型, 这是EVM设计决定的，因为EVM是基于栈的虚拟机，没有浮点数支持
    但是可以通过使用fixed和ufixed类型来表示浮点数
    

    1. 底层类型
        bytes：动态字节数组（bytes是bytes1[]的别名）。
        string：UTF-8 编码的字符串（本质是特殊的bytes）。
    2. 存储方式
        bytes：直接存储原始字节。
        string：存储 UTF-8 编码的字节（变长编码，1-4 字节 / 字符）。
    3. 无论bytes还是string，都无内置方法，需要依赖外部库： 如openzeppelin的库
    
    
    
    
*/
contract Primitives {
    bool public boo = true;

    // uint 代表[0, ]
    uint8 public u8 = 1; // 2**8 -1
    uint16 public u16 = 12; // 2**16 - 1
    uint256 public u256 = 256; // 2**256 - 1
  
    int8 public i8_All = -128;
    // [-2 ** 127, 2** 127-1]
    int128 public i128_all = -256;
    

    int256 public minInt = type(int256).min;
    int256 public maxInt = type(int256).max;

    address public addr = 0xCA35b7d915458EF540aDe6068dFe2F44E8fa733c;

    bytes1 a = 0xb5;

    // 默认值

    bool public defaultBool;
    uint256 public defaultUint256;

    int256 public default245;

    address public defaultAddr;
}