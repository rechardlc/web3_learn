# Docker 部署指南

## 📦 文件说明

- `docker-compose.yml` - 生产环境配置（包含 Redis 和 Next.js 应用）
- `docker-compose.dev.yml` - 开发环境配置（仅包含 Redis）
- `Dockerfile` - Next.js 应用构建文件
- `.dockerignore` - Docker 构建忽略文件

## 🚀 快速开始

### 开发环境

1. **启动 Redis 服务**：
   ```bash
   # 使用开发环境配置
   docker-compose -f docker-compose.dev.yml up -d
   
   # 或者使用生产配置中的 Redis
   docker-compose up redis -d
   ```

2. **启动 Next.js 开发服务器**：
   ```bash
   pnpm dev
   ```

3. **验证 Redis 连接**：
   ```bash
   # 进入 Redis 容器
   docker exec -it redis-notes-dev redis-cli
   
   # 测试连接
   ping
   ```

### 生产环境

1. **构建并启动所有服务**：
   ```bash
   # 构建并启动所有服务
   docker-compose up --build -d
   
   # 仅启动 Redis
   docker-compose up redis -d
   ```

2. **查看服务状态**：
   ```bash
   docker-compose ps
   ```

3. **查看日志**：
   ```bash
   # 查看所有服务日志
   docker-compose logs
   
   # 查看特定服务日志
   docker-compose logs redis
   docker-compose logs app
   ```

## 🛠️ 常用命令

### 服务管理
```bash
# 启动服务
docker-compose up -d

# 停止服务
docker-compose down

# 重启服务
docker-compose restart

# 重新构建并启动
docker-compose up --build -d
```

### Redis 管理
```bash
# 进入 Redis 容器
docker exec -it redis-notes redis-cli

# 查看 Redis 数据
docker exec -it redis-notes redis-cli keys "*"

# 清空 Redis 数据
docker exec -it redis-notes redis-cli flushall
```

### 数据持久化
```bash
# 备份 Redis 数据
docker exec redis-notes redis-cli save
cp ./redis/data/dump.rdb ./backup/

# 恢复 Redis 数据
cp ./backup/dump.rdb ./redis/data/
docker restart redis-notes
```

## 🔧 配置说明

### Redis 配置
- **端口**: 6379
- **数据目录**: `./redis/data`
- **配置文件**: `./redis/conf/redis.conf`
- **容器名**: `redis-notes` (生产) / `redis-notes-dev` (开发)

### Next.js 应用配置
- **端口**: 3000
- **环境变量**: 
  - `NODE_ENV=production`
  - `REDIS_URL=redis://redis:6379`

## 📁 目录结构

```
next-notes/
├── docker-compose.yml          # 生产环境配置
├── docker-compose.dev.yml      # 开发环境配置
├── Dockerfile                  # 应用构建文件
├── .dockerignore              # 构建忽略文件
├── redis/
│   ├── conf/
│   │   └── redis.conf         # Redis 配置文件
│   └── data/                  # Redis 数据目录
└── DOCKER_README.md           # 本文档
```

## 🚨 注意事项

1. **端口冲突**: 确保 6379 和 3000 端口未被占用
2. **数据持久化**: Redis 数据存储在 `./redis/data` 目录
3. **网络隔离**: 服务间通过 Docker 网络通信
4. **健康检查**: Redis 服务包含健康检查机制

## 🔍 故障排除

### 常见问题

1. **端口被占用**：
   ```bash
   # 查看端口占用
   netstat -tulpn | grep :6379
   
   # 修改 docker-compose.yml 中的端口映射
   ports:
     - "6380:6379"  # 使用其他端口
   ```

2. **权限问题**：
   ```bash
   # 确保 redis 目录有正确权限
   sudo chown -R 1001:1001 ./redis/data
   ```

3. **网络连接问题**：
   ```bash
   # 检查网络
   docker network ls
   docker network inspect notes-network
   ```

## 📞 支持

如果遇到问题，请检查：
1. Docker 和 Docker Compose 版本
2. 端口占用情况
3. 文件权限
4. 网络配置
