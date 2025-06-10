// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

contract EtherUnits {

    // wei 是以太坊最小单位, 1 ether = 10^18 wei， gas计算一般使用wei
    uint256 public oneWei = 1 wei;
    uint256 public oneEther = 1 ether;  // 1 ether = 10^18 wei
    bool public isOneWei = oneWei == 1;
    bool public isOneEther = oneEther == 1 ether;

}