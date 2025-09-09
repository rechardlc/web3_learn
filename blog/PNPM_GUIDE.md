# PNPM 包管理器使用指南

本项目强制使用 **pnpm** 作为包管理器，不允许使用 npm 或 yarn。

## 为什么选择 pnpm？

1. **磁盘空间效率**: pnpm 使用硬链接和符号链接节省磁盘空间
2. **安装速度快**: 比 npm 和 yarn 更快的安装速度
3. **严格的依赖管理**: 避免幽灵依赖问题
4. **更好的 monorepo 支持**: 原生支持工作空间
5. **一致性**: 确保所有开发者使用相同的包管理器

## 安装和使用

### 首次设置

```bash
# 1. 全局安装 pnpm（如果还没有安装）
npm install -g pnpm

# 2. 验证安装
pnpm --version

# 3. 安装项目依赖
pnpm install

# 4. 启动开发服务器
pnpm dev
```

### 日常命令

```bash
# 安装新依赖
pnpm add package-name

# 安装开发依赖
pnpm add -D package-name

# 删除依赖
pnpm remove package-name

# 更新依赖
pnpm update

# 运行脚本
pnpm dev
pnpm build
pnpm start
```

### pnpm 特有命令

```bash
# 查看依赖树
pnpm list

# 查看过时的依赖
pnpm outdated

# 清理未使用的依赖
pnpm prune

# 审计安全漏洞
pnpm audit
```

## 从其他包管理器迁移

### 从 npm 迁移
```bash
# 删除 package-lock.json
rm package-lock.json

# 使用 pnpm 安装
pnpm install
```

### 从 yarn 迁移
```bash
# 删除 yarn.lock
rm yarn.lock

# 删除 .yarn 目录（如果存在）
rm -rf .yarn

# 使用 pnpm 安装
pnpm install
```

## 项目配置

项目通过以下方式强制使用 pnpm：

1. ✅ `package.json` 中的 `packageManager` 字段指定 pnpm
2. ✅ `engines` 字段限制包管理器版本
3. ✅ `preinstall` 脚本检查当前使用的包管理器
4. ✅ `.npmrc` 文件配置强制使用 pnpm
5. ✅ `pnpm-workspace.yaml` 工作空间配置
6. ✅ `.gitignore` 忽略其他包管理器的锁文件

## 错误排查

如果遇到错误：

### "必须使用 pnpm" 错误
- 确保已安装 pnpm: `npm install -g pnpm`
- 使用 `pnpm install` 而不是 `npm install` 或 `yarn install`

### 依赖解析问题
- 删除 `node_modules` 和锁文件: `rm -rf node_modules package-lock.json yarn.lock`
- 重新安装: `pnpm install`

### 权限问题
- 在 Windows 上，确保以管理员身份运行终端
- 在 macOS/Linux 上，检查文件权限

## 更多资源

- [pnpm 官方文档](https://pnpm.io/)
- [pnpm vs npm vs yarn 对比](https://pnpm.io/benchmarks)
- [pnpm 迁移指南](https://pnpm.io/migration)