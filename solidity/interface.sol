// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

// 定义接口, 描述合约的函数和事件

interface ICounter {
    function count() external view returns(uint);
    function increment() external;
}

contract counter {
    uint public count;
    function increment() external {
        count += 1;
    }
}

contract MyContract {
    function incrementCounter(address _addr) external {
        ICounter(_addr).increment();
    }
    function getCount(address _counter) external view returns (uint256) {
        return ICounter(_counter).count();
    }
}