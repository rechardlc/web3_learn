import type { HardhatUserConfig } from "hardhat/config";

import hardhatToolboxViemPlugin from "@nomicfoundation/hardhat-toolbox-viem";
import { configVariable } from "hardhat/config";

const config: HardhatUserConfig = {
  plugins: [hardhatToolboxViemPlugin],
  // 默认网络配置
  solidity: {
    profiles: {
      default: {
        version: "0.8.28",
      },
      production: {
        version: "0.8.28",
        settings: {
          optimizer: {
            enabled: true,
            runs: 200,
          },
        },
      },
    },
  },
  networks: {
    // 本地开发网络 - 默认 Hardhat 网络
    localhost: {
      type: "http", // 本地开发网络类型
      chainType: "l1", // L1或者L2，代表第几层网络
      url: "http://127.0.0.1:9545", // 本地开发网络URL
      chainId: 31337, // 本地开发网络链ID
      accounts: [
        // 使用默认的 Hardhat 测试账户私钥
        "0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80",
        "0x59c6995e998f97a5a0044966f0945389dc9e86dae88c7a8412f4603b6b78690d"
      ],
      gas: "auto",
      gasPrice: "auto",
    },
    // 本地 Ganache 网络
    ganache: {
      type: "http",
      chainType: "l1",
      url: "http://127.0.0.1:7545",
      chainId: 1337, // Ganache 网络链ID
      accounts: [
        // Ganache 默认账户私钥
        "0x4f3edf983ac636a65a842ce7c78d9aa706d3b113bce9c46f30d7d21715b23b1d",
        "0x6cbed15c793ce57650b9877cf6fa156fbef513c4e6134f022a85b1ffdd59b2a1",
        "0x6370fd033278c143179d81c5526140625662b8daa446c22ee2d73db3707e620c",
      ],
      gas: 2100000,
      gasPrice: 20000000000,
    },
    // 本地 Anvil 网络 (Foundry)
    anvil: {
      type: "http",
      chainType: "l1",
      url: "http://127.0.0.1:8545",
      chainId: 31337, // Anvil 网络链ID
      accounts: [
        // Anvil 默认账户私钥
        "0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80",
        "0x59c6995e998f97a5a0044966f0945389dc9e86dae88c7a8412f4603b6b78690d",
        "0x5de4111dea5c70b4c4b5b2b4b4b4b4b4b4b4b4b4b4b4b4b4b4b4b4b4b4b4b4b4",
      ],
      gas: 2100000,
      gasPrice: 1000000000,
    },
    // Hardhat 内置网络配置
    hardhatMainnet: {
      type: "edr-simulated",
      chainType: "l1",
    },
    hardhatOp: {
      type: "edr-simulated",
      chainType: "op",
    },
    // 测试网络
    sepolia: {
      type: "http",
      chainType: "l1",
      url: configVariable("SEPOLIA_RPC_URL"),
      accounts: [configVariable("SEPOLIA_PRIVATE_KEY")],
    },
  },
};

export default config;
