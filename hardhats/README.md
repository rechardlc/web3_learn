# Hardhat 3 项目结构分析

这是一个基于 Hardhat 3 Beta 的智能合约开发项目，使用 Node.js 原生测试运行器 (`node:test`) 和 `viem` 库进行以太坊交互。

## 项目结构分析

### 核心配置文件

#### `hardhat.config.ts` - 项目主配置

- **作用**: 定义 Solidity 编译器版本、网络配置、插件和任务设置
- **特点**:
  - 使用 Hardhat 3 的 `profiles` 配置多环境编译
  - 支持本地模拟 L1/OP 链和 Sepolia 测试网
  - 集成 Viem 和 Ignition 插件
  - 使用 `configVariable` 管理敏感配置

#### `package.json` - 依赖管理

- **作用**: 定义项目依赖和脚本
- **关键依赖**:
  - `hardhat`: 3.0.6 (Hardhat 3 Beta)
  - `@nomicfoundation/hardhat-toolbox-viem`: Viem 集成
  - `@nomicfoundation/hardhat-ignition`: 部署模块
  - `forge-std`: Foundry 测试标准库
  - `viem`: 以太坊交互库

### 合约与测试目录

#### `contracts/` - 智能合约源码

- **`Counter.sol`**: 简单计数器合约
  - 包含 `inc()` 和 `incBy()` 函数
  - 使用 `require` 进行参数校验
  - 定义 `Increment` 事件
- **`Counter.t.sol`**: Foundry 风格的 Solidity 测试
  - 继承 `forge-std/Test.sol`
  - 使用 `vm.expectRevert()` 测试异常情况
  - 包含模糊测试 (`testFuzz_Inc`)

#### `test/` - Node.js 集成测试

- **`Counter.ts`**: 使用 `node:test` 和 Viem 的集成测试
  - 通过 `network.connect()` 获取 Viem 客户端
  - 使用 `viem.deployContract()` 部署合约
  - 使用 `viem.assertions.emitWithArgs()` 断言事件
  - 演示事件聚合和状态验证

### 部署与脚本

#### `ignition/modules/` - 部署模块

- **`Counter.ts`**: Ignition v3 部署模块
  - 使用 `buildModule()` 声明式描述部署流程
  - 部署后自动调用 `incBy(5)` 初始化
  - 支持本地和远程网络部署

#### `scripts/` - 自定义脚本

- **`send-op-tx.ts`**: OP 链交易示例
  - 演示连接 OP 模拟链 (`hardhatOp`)
  - 估算 L1 gas 费用
  - 发送 L2 交易并等待确认

### 配置文件

#### `tsconfig.json` - TypeScript 配置

- 基于 Node 22 配置
- 启用严格模式和 ESM 模块解析
- 输出目录设置为 `dist`

#### `.gitignore` - 忽略文件

- 忽略 `node_modules`、`dist`、`bundle`
- 忽略 Hardhat 编译产物: `artifacts/`、`cache/`
- 忽略可选产物: `types/`、`coverage/`

## 文件生成过程

### 1. 项目初始化

```bash
# 创建项目目录
mkdir hardhats && cd hardhats

# 初始化 package.json (ESM)
npm init -y
# 编辑 package.json 添加 "type": "module"

# 安装依赖
pnpm add -D hardhat @nomicfoundation/hardhat-toolbox-viem @nomicfoundation/hardhat-ignition forge-std viem typescript @types/node
```

### 2. 配置文件创建

- 手动创建 `hardhat.config.ts` 配置网络和插件
- 创建 `tsconfig.json` 配置 TypeScript
- 创建 `.gitignore` 忽略编译产物

### 3. 合约开发

- 在 `contracts/` 中编写 Solidity 合约
- 在 `contracts/` 中编写 Foundry 风格测试

### 4. 集成测试

- 在 `test/` 中使用 `node:test` 编写集成测试
- 使用 Viem 进行合约交互和断言

### 5. 部署配置

- 在 `ignition/modules/` 中创建部署模块
- 配置部署后的初始化调用

## 使用方法

### 运行测试

```bash
# 运行所有测试
npx hardhat test

# 仅运行 Solidity 测试
npx hardhat test solidity

# 仅运行 Node.js 测试
npx hardhat test nodejs
```

### 编译合约

```bash
# 编译所有合约 (生成 artifacts/ 和 cache/)
npx hardhat compile
```

### 部署合约

#### 本地部署

```bash
npx hardhat ignition deploy ignition/modules/Counter.ts
```

#### 部署到 Sepolia

```bash
# 设置私钥 (使用 keystore)
npx hardhat keystore set SEPOLIA_PRIVATE_KEY

# 或设置环境变量
export SEPOLIA_PRIVATE_KEY="your_private_key"
export SEPOLIA_RPC_URL="https://sepolia.infura.io/v3/your_project_id"

# 部署到 Sepolia
npx hardhat ignition deploy --network sepolia ignition/modules/Counter.ts
```

### 运行脚本

```bash
# 运行 OP 链交易脚本
npx hardhat run scripts/send-op-tx.ts
```

## Hardhat 3 新特性

### 配置变量 (Configuration Variables)

- 使用 `configVariable()` 管理敏感信息
- 支持 `hardhat-keystore` 插件安全存储
- 支持环境变量覆盖

### 网络配置

- 支持 `edr-simulated` 类型进行本地模拟
- 支持 `chainType: "l1"` 和 `chainType: "op"` 区分链类型
- 集成 Viem 客户端进行链交互

### 测试框架

- 原生支持 Foundry 风格的 Solidity 测试
- 集成 Node.js 原生 `node:test` 运行器
- Viem 断言库提供丰富的测试能力

## 参考资源

- [Hardhat 3 入门指南](https://hardhat.org/docs/getting-started#getting-started-with-hardhat-3)
- [Hardhat 3 Beta Telegram 群组](https://hardhat.org/hardhat3-beta-telegram-group)
- [Viem 文档](https://viem.sh/)
- [Node.js 测试 API](https://nodejs.org/api/test.html)
