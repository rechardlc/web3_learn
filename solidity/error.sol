// 错误处理

// 1. 使用try catch 捕获错误
// 2. 使用require 检查条件
// 3. 使用assert 检查条件
// 4. 使用revert 回滚
// 5. 使用throw 抛出错误
// 6. 使用revert 回滚
// 7. 使用throw 抛出错误
// 8. 使用revert 回滚
// 9. 使用throw 抛出错误

// SPDX-License-Identifier:MIT
pragma solidity >=0.8.13 <0.9.0;


contract Error {

    // 1. require 检查条件，如果条件不满足，则抛出错误，并回滚
    function testRequire(uint _i) public pure {
        // 要求_i必须大于10
        require(_i > 10, "i must be greater than 10");
    }
    // 2. revert 抛出错误，并回滚: 类似于 require，但是revert符合更加复杂的条件判断
    function testRevert(uint _i) public pure {
        // 要求_i必须大于10
        if (_i <= 10) {
            revert("i must be greater than 10");
        }
    }

    // assert 判断值是否一致，维持布尔值
    function testAssert(uint _i) public private {
        assert(_i == 1);
    }

}