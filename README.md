# AI Mock Interview

AI Mock Interview 是一个智能模拟面试系统，旨在帮助求职者提升面试技能。项目基于 Next.js 15+ 构建，具有以下特点：

- 🤖 智能对话：基于 OpenAI GPT-4 和 Vercel AI SDK，提供自然流畅的面试体验
- 💡 场景丰富：支持前端、后端、全栈等多个技术岗位的面试模拟
- 📝 即时反馈：实时生成面试反馈和评分，帮助快速改进
- 📊 数据分析：可视化展示面试历史和进步轨迹
- ⚡️ 高性能：采用 Next.js 15+ App Router，支持流式响应
- 🎯 个性化：可自定义面试难度和专业方向
- 🌐 多语言：支持中英文面试和界面切换

## 技术栈

### 核心技术
- **框架**: Next.js 15+ (App Router)
- **包管理**: pnpm
- **构建工具**: Turbopack (构建速度提升 10x+)
- **AI 集成**: 
  - OpenAI GPT-4
  - Vercel AI SDK
  - AI Streaming
- **类型系统**: TypeScript 5.x + Zod
- **组件库**: 
  - Shadcn UI
  - Radix UI Primitives
  - Lucide Icons
- **状态管理**: Zustand
- **样式方案**: 
  - Tailwind CSS
  - CSS Variables
  - CSS Modules

### 数据层
- **ORM**: Prisma
- **数据库**: Supabase
- **API 集成**: RESTful + tRPC
- **认证**: NextAuth.js v5
- **API**: Next.js Route Handlers

### 资源
- **动画**: Framer Motion 11
- **图标**: Lucide React

### 工程化工具
- **代码规范**: ESLint + @next/eslint-plugin
- **代码格式化**: Prettier 3 + prettier-plugin-tailwindcss
- **代码质量**:
  - ESLint
  - Prettier
  - TypeScript
- **Git 工作流**: 
  - Commitizen (提交规范)
  - Husky (Git Hooks)
  - Lint-staged
- **部署**: 
  - Vercel
  - Vercel Analytics
  - Speed Insights

## 项目结构

```
# 项目目录结构说明

.
├── prisma/               # 数据库相关配置
│   ├── schema.prisma     # Prisma 数据模型定义
│   └── migrations/       # 数据库迁移历史记录

├── public/               # 静态资源目录
│   ├── images/           # 网站图片资源
│   └── fonts/            # 自定义字体文件（配置浏览器缓存策略）

├── src/
│   ├── app/              # Next.js 15 App Router 核心目录
│   │   └── [locale]/     # 多语言路由目录（包含zh-CN/en-US等）
│   │       ├── layout.tsx # 全局布局（包含主题/多语言配置）
│   │       ├── page.tsx  # 首页组件
│   │       └── interview # 面试功能相关页面
│   │           └── page.tsx
│   │
│   ├── components/       # 通用组件库
│   │   ├── client/       # 客户端组件（带'use client'指令）
│   │   └── server/       # 纯服务器组件
│   │
│   ├── config/           # 应用配置
│   │   ├── site.ts       # 网站基本信息配置
│   │   └── theme.ts      # 主题样式配置
│   │
│   ├── hooks/            # 自定义React Hooks
│   │   └── useAIInterview.ts # AI面试业务逻辑
│   │
│   ├── i18n/             # 国际化核心配置
│   │   ├── config.ts     # 多语言配置参数
│   │   └── dictionaries.ts # 语言包加载器
│   │
│   ├── lib/              # 工具函数库
│   │   ├── db.ts         # 数据库连接
│   │   └── ai.ts         # AI接口封装
│   │
│   ├── messages/         # 国际化文本资源
│   │   ├── zh-CN.json    # 简体中文语言包
│   │   └── en-US.json    # 英文语言包
│   │
│   ├── styles/           # 全局样式
│   │   ├── globals.css   # 全局CSS变量定义
│   │   └── theme.css     # 主题相关样式
│   │
│   └── types/            # TypeScript类型定义
│       └── interview.d.ts # 面试功能类型定义

# 重要配置文件
├── .env.example          # 环境变量示例（包含：
│                        # - DATABASE_URL 数据库连接
│                        # - OPENAI_API_KEY AI接口密钥
│                        # - NEXT_PUBLIC_DEFAULT_LOCALE 默认语言）
│
├── next.config.mjs       # Next.js配置（包含：
│                        # - 多语言路由配置
│                        # - 打包优化配置）
│
├── tailwind.config.ts    # Tailwind配置（包含：
│                        # - 主题色配置
│                        # - 响应式断点配置）
│
└── middleware.ts         # 中间件配置（实现：
                         # - 自动语言检测
                         # - 路由重定向）
```

## 开始使用

1. 克隆仓库：
```bash
git clone https://github.com/ai-forum/Ai-Mock-Interview.git
cd Ai-Mock-Interview
```

2. 安装依赖：
```bash
pnpm install
```

3. 配置环境变量：
```bash
cp .env.example .env
```
然后编辑 .env 文件，填入必要的环境变量。

4. 初始化数据库：
```bash
pnpm prisma generate
pnpm prisma db push
```

5. 启动开发服务器：
```bash
pnpm dev
```

访问 [http://localhost:3000](http://localhost:3000) 查看应用。


## 贡献

欢迎提交 Pull Request 和 Issue！

## 许可

[MIT](LICENSE)
