# 注意事项


## 学习中遇到的问题？
1. Transient Storage 到底是什么？如何使用？应用场景？


## 二维数组差异
1. 下面带solidity中代表3行2列，其他语法中代表2行3列，solidity是反过来的
```solidity
    contract Array {
        uint[2][3] arr;
    }
```

## 申明

### 可以在合约外部申明的类型
1. 结构体 Struct
   ```solidity
   // 合约外部声明结构体
    struct User {
        string name;
        uint256 age;
    }

    contract Example {
        User public user; // 使用外部定义的结构体
    }
   ```
2. 枚举 Enum
   ```solidity
        // 合约外部声明枚举
        enum Status { Active, Inactive, Pending }

        contract Example {
            Status public status; // 使用外部定义的枚举
        }
    ```
3. 事件 Event
   ```solidity
        // 合约外部声明事件
    event Transfer(address indexed from, address indexed to, uint256 value);

    contract Example {
        function transfer(address to, uint256 value) public {
            emit Transfer(msg.sender, to, value); // 使用外部定义的事件
        }
    }
   ```
4. 错误 Error
    ```solidity
        // 合约外部声明错误
    error InsufficientBalance(uint256 available, uint256 required);

    contract Example {
        function withdraw(uint256 amount) public {
            if (amount > balance) {
                revert InsufficientBalance(balance, amount); // 使用外部定义的错误
            }
        }
    }
    ```
5. 库 Library
    ```solidity
        // 合约外部声明库
        library Math {
            function add(uint256 a, uint256 b) internal pure returns (uint256) {
                return a + b;
            }
        }

        contract Example {
            function calculate() public pure {
                uint256 result = Math.add(1, 2); // 使用外部定义的库
            }
        }
    ```
6. 接口 interface
   ```solidity
        // 合约外部声明接口
    interface IERC20 {
        function transfer(address to, uint256 value) external returns (bool);
    }

    contract Example {
        function interact(IERC20 token) public {
            token.transfer(msg.sender, 100); // 使用外部定义的接口
        }
    }
   ```
7. 常量 Constant
    ```solidity
        // 合约外部声明常量
    uint256 constant MAX_SUPPLY = 1e27;

    contract Example {
        uint256 public totalSupply = MAX_SUPPLY; // 使用外部定义的常量
    }
    ```

### 不可在合约外部声明的类型
1. 状态变量：必须在合约内部声明。
2. 函数：必须在合约或库内部声明。
3. 映射（Mapping）：通常在合约内部作为状态变量使用，不可在合约外部直接声明。