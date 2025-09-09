#!/usr/bin/env node

/**
 * 检查是否使用正确的包管理器 (pnpm)
 * 这个脚本会在 preinstall 阶段运行
 */

const userAgent = process.env.npm_config_user_agent || '';

if (!userAgent.includes('pnpm')) {
  console.error(`
❌ 错误: 此项目必须使用 pnpm 作为包管理器

当前使用的包管理器: ${userAgent.split('/')[0] || '未知'}

请使用以下命令安装依赖:
  pnpm install

如果还没有安装 pnpm，请先全局安装:
  npm install -g pnpm

更多信息请查看: https://pnpm.io/
`);
  process.exit(1);
}

console.log('✅ 正在使用 pnpm，继续安装...');