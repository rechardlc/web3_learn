## docker 
```bash
docker run -d \
  --name迁移友好的redis \
  -p 6379:6379 \
  -v $(pwd)/redis-data:/data \
  -v $(pwd)/redis-conf:/usr/local/etc/redis \
  --restart unless-stopped \
  redis:latest \
  redis-server /usr/local/etc/redis/redis.conf
```

## 学习注意点
1. [客户端组件尽量下移动](./public//image.png)
2. Suspense 的效果就是允许你推迟渲染某些内容，直到满足某些条件（例如数据加载完毕）。在
开发 Next.js 项目的时候，有数据加载的地方多考虑是否可以使用 
Suspense 或者 loading.js带来更好的体验。