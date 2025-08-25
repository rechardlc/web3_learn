# Next.js 应用架构说明

## 🏗️ 组件架构

### 服务器组件 vs 客户端组件

#### 服务器组件 (Server Components)
- **特点**: 在服务器端渲染，不包含客户端 JavaScript
- **用途**: 数据获取、SEO 优化、性能优化
- **示例**: `SidebarNoteList` - 负责从 Redis 获取数据

#### 客户端组件 (Client Components)
- **特点**: 在浏览器中运行，包含交互逻辑
- **用途**: 用户交互、状态管理、事件处理
- **示例**: `SidebarNoteListClient` - 处理搜索和用户交互

## 📁 组件结构

```
src/
├── components/
│   ├── Sidebar.jsx                    # 服务器组件 - 主侧边栏
│   ├── sidebarNoteList.jsx            # 服务器组件 - 数据获取
│   ├── sidebarNoteListClient.jsx      # 客户端组件 - 搜索和交互
│   ├── SidebarNoteItem.jsx            # 服务器组件 - 笔记项
│   ├── sidebarNoteItemContent.jsx     # 客户端组件 - 展开/收起交互
│   ├── SidebarSearchField.jsx         # 客户端组件 - 搜索功能
│   ├── EditButton.jsx                 # 服务器组件 - 编辑按钮
│   └── noteListSkeleton.jsx           # 服务器组件 - 加载骨架屏
└── lib/
    └── redis.js                       # 服务器端 - Redis 连接
```

## 🔄 数据流

### 1. 数据获取流程
```
用户访问 → Sidebar (服务器组件) 
         → Suspense 包裹 SidebarNoteList (服务器组件)
         → getAllNotes() (Redis 数据获取)
         → 传递给 SidebarNoteListClient (客户端组件)
         → 渲染笔记列表
```

### 2. 搜索流程
```
用户输入 → SidebarSearchField (客户端组件)
        → 更新 URL 参数
        → SidebarNoteListClient 重新渲染
        → 过滤笔记数据
        → 显示搜索结果
```

## 🎯 关键设计原则

### 1. 关注点分离
- **服务器组件**: 专注于数据获取和 SEO
- **客户端组件**: 专注于用户交互和状态管理

### 2. 性能优化
- **Suspense**: 实现流式渲染和加载状态
- **服务器组件**: 减少客户端 JavaScript 包大小
- **数据获取**: 在服务器端完成，减少客户端请求

### 3. 用户体验
- **加载状态**: 使用骨架屏提供视觉反馈
- **搜索**: 实时搜索，无需页面刷新
- **交互**: 平滑的展开/收起动画

## 🛠️ 技术栈

### 前端
- **Next.js 15**: App Router, 服务器组件
- **React 19**: Suspense, useTransition
- **SCSS**: 样式管理
- **dayjs**: 日期格式化

### 后端
- **Redis**: 数据存储
- **ioredis**: Redis 客户端
- **Docker**: 容器化部署

## 🚀 部署架构

### 开发环境
```
┌─────────────────┐    ┌─────────────────┐
│   Next.js App   │    │   Redis Docker  │
│   (localhost)   │◄──►│   (localhost)   │
│   Port: 3000    │    │   Port: 6379    │
└─────────────────┘    └─────────────────┘
```

### 生产环境
```
┌─────────────────┐    ┌─────────────────┐
│ Next.js Docker  │    │   Redis Docker  │
│   Container     │◄──►│   Container     │
│   Port: 3000    │    │   Port: 6379    │
└─────────────────┘    └─────────────────┘
```

## 🔧 开发指南

### 添加新功能
1. **数据获取**: 在服务器组件中使用 Redis 函数
2. **用户交互**: 在客户端组件中使用 React hooks
3. **样式**: 使用 SCSS 模块化样式

### 调试技巧
1. **服务器组件**: 查看服务器端日志
2. **客户端组件**: 使用浏览器开发者工具
3. **数据流**: 检查 Redis 数据状态

## 📚 最佳实践

1. **组件设计**: 优先使用服务器组件，必要时才使用客户端组件
2. **数据获取**: 在服务器端完成，避免客户端 API 调用
3. **状态管理**: 使用 URL 参数管理全局状态
4. **性能**: 利用 Suspense 和流式渲染
5. **SEO**: 服务器组件确保内容可被搜索引擎索引

