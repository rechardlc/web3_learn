# 🔌 Cursor 插件迁移到 Qoder 指南

## 📋 已导入的 Cursor 插件列表

### 🎨 代码美化与格式化

- **adpyke.codesnap** - 代码截图工具，生成美观的代码片段图片
- **esbenp.prettier-vscode** - 代码格式化工具
- **vscode-icons-team.vscode-icons** - 文件图标主题

### 🎯 代码质量与检查

- **dbaeumer.vscode-eslint** - JavaScript/TypeScript 代码检查
- **stylelint.vscode-stylelint** - CSS/SCSS 样式检查
- **steoates.autoimport** - 自动导入依赖

### 🚀 开发效率工具

- **formulahendry.auto-rename-tag** - HTML/JSX 标签自动重命名
- **formulahendry.code-runner** - 代码快速运行工具
- **christian-kohler.path-intellisense** - 路径智能提示
- **techer.open-in-browser** - 在浏览器中打开文件
- **xyz.local-history** - 本地文件历史记录

### 🎨 前端开发

- **bradlc.vscode-tailwindcss** - Tailwind CSS 智能提示
- **vue.volar** - Vue.js 开发支持
- **qiu8310.minapp-vscode** - 小程序开发支持

### 🔗 版本控制

- **eamodio.gitlens** - Git 增强工具，显示代码历史和作者信息

### ☕ Java 开发

- **redhat.java** - Java 语言支持
- **vscjava.vscode-java-pack** - Java 开发工具包
- **vscjava.vscode-gradle** - Gradle 构建工具支持
- **vscjava.vscode-maven** - Maven 构建工具支持
- **vscjava.vscode-java-debug** - Java 调试工具
- **vscjava.vscode-java-dependency** - Java 依赖管理
- **vscjava.vscode-java-test** - Java 测试工具

### 🐋 容器化开发

- **ms-azuretools.vscode-docker** - Docker 支持
- **ms-azuretools.vscode-containers** - 容器开发环境

### 💎 Web3 & 区块链开发

- **juanblanco.solidity** - Solidity 智能合约开发支持

### 🗃️ 数据库

- **redis.redis-for-vscode** - Redis 数据库管理
- **prisma.prisma** - Prisma ORM 数据库工具，提供类型安全的数据库访问

### 📊 图表与设计

- **hediet.vscode-drawio** - 流程图和图表绘制工具

### ⌨️ 编辑器体验

- **k--kato.intellij-idea-keybindings** - IntelliJ IDEA 快捷键绑定
- **ms-vscode.vscode-typescript-next** - TypeScript 最新版本支持

## 🆕 额外添加的 Web3 开发插件

- **christian-kohler.npm-intellisense** - NPM 包智能提示
- **tintinweb.solidity-visual-auditor** - Solidity 安全审计工具
- **consensys.truffle-for-vscode** - Truffle 框架支持
- **tintinweb.ethereum-security-bundle** - 以太坊安全工具包
- **remix-project.remix-ide** - Remix IDE 集成
- **ms-vscode.vscode-json** - JSON 文件支持
- **redhat.vscode-yaml** - YAML 文件支持
- **ms-vscode.hexeditor** - 十六进制编辑器
- **ms-vscode.live-server** - 实时服务器
- **mhutchie.git-graph** - Git 图形化界面
- **pkief.material-icon-theme** - Material 图标主题
- **github.github-vscode-theme** - GitHub 主题

## 🚀 安装方法

### 方法 1：自动安装脚本

在项目根目录运行：

**Windows (CMD):**

```cmd
install_extensions.bat
```

**Windows (PowerShell):**

```powershell
./install_extensions.ps1
```

### 方法 2：手动安装

打开 Qoder，按 `Ctrl+Shift+P`，输入 "Extensions: Install Extensions"，然后搜索并安装上述插件。

### 方法 3：通过推荐列表自动安装

当您在 Qoder 中打开此项目时，编辑器会根据 `.vscode/extensions.json` 文件自动推荐安装这些插件。

## 📝 使用建议

1. **重启编辑器**: 安装完成后重启 Qoder 以确保所有插件正常工作
2. **配置同步**: 插件的个人设置可能需要重新配置
3. **快捷键**: 某些插件的快捷键可能与 Qoder 默认快捷键冲突，请根据需要调整
4. **性能优化**: 如果感觉编辑器变慢，可以禁用一些不常用的插件

## 🔧 相关配置文件

- `.vscode/extensions.json` - 推荐插件列表
- `.vscode/settings.json` - 工作区设置
- `.vscode/launch.json` - 调试配置
- `.vscode/tasks.json` - 任务配置

## 🎯 针对您的 Web3 项目优化

这些插件特别适合您的项目技术栈：

- **Next.js 15.4.6** + **React 19.0.1**
- **Tailwind CSS v4**
- **Solidity 智能合约开发**
- **pnpm 包管理**

安装完成后，您将拥有一个功能完整的 Web3 开发环境！
