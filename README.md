# 蜜雪冰城奶茶购物平台

一个基于 Vue 3 + Vite + Element Plus 的奶茶在线购物前端项目，仿蜜雪冰城品牌风格，包含完整的商品浏览、搜索、购物车、订单管理等电商核心流程。

## 技术栈

| 技术 | 版本 | 用途 |
|------|------|------|
| **Vue 3** | ^3.5.13 | 前端框架，Composition API (`<script setup>`) |
| **Vite** | ^6.1.0 | 构建工具与开发服务器 |
| **Vue Router** | ^4.5.1 | 前端路由（History 模式） |
| **Element Plus** | ^2.10.1 | UI 组件库 |

## 功能模块

### 页面结构

```
首页 (/)              — 品牌导航栏 + 轮播图 + 商品展示 + 搜索
商品列表 (/listmx)     — 关键词搜索结果展示
商品详情 (/detailsmx/:id) — 动态路由，商品大图、描述、购买
购物车 (/cartmx)       — 全选联动、数量增减、总价计算、提交订单
订单管理 (/ordermx)    — 订单状态流转（付款 → 取消 → 删除）
登录 (/login)          — 品牌化登录页
注册 (/register)       — 表单校验（密码一致性）
```

### 核心交互

- **搜索**：通过 Vue Router query 参数传递关键词，`computed` 实时过滤商品
- **购物车**：全选/反选联动（`computed` getter/setter）、`reduce` 总价计算、`InputNumber` 数量调整、单项删除
- **订单状态流转**：待付款(0) → 取消订单(1) → 删除订单(2)，`v-if/v-else-if` 条件渲染对应操作按钮
- **详情页**：动态路由 `:id` 获取商品数据，支持"立即购买"和"加入购物车"

### 组件拆分

| 组件 | 说明 |
|------|------|
| `Header.vue` | 全局导航栏，含品牌名称、路由链接 |
| `Carousel.vue` | Element Plus 卡片式轮播图 |
| `Search.vue` | 搜索输入框 + 路由跳转 |
| `ContentMxcity.vue` | 首页商品列表展示 |

## 项目结构

```
src/
├── assets/
│   ├── css/main.css          # 全局样式（原子化工具类）
│   ├── details.js            # 商品详情响应式数据（10款奶茶）
│   ├── cartProductsMx.js     # 购物车共享响应式数据
│   ├── ordermx.js            # 订单共享响应式数据
│   ├── lunbotu.js            # 轮播图数据
│   ├── naichaImg/            # 奶茶商品图片
│   ├── lunbotuImg/           # 轮播图图片
│   └── images/               # Logo 等静态资源
├── components/               # 可复用组件
├── views/                    # 页面级组件
├── router/index.js           # 路由配置
├── App.vue                   # 根组件
└── main.js                   # 入口文件（注册 Element Plus、路由）
```

## 快速开始

### 环境要求

- Node.js >= 18

### 安装依赖

```bash
npm install
```

### 启动开发服务器

```bash
npm run dev
```

浏览器访问 `http://localhost:5173` 即可预览。

### 构建生产版本

```bash
npm run build
```

产物输出到 `dist/` 目录。

### 预览生产构建

```bash
npm run preview
```

## 项目特点

- **Vue 3 Composition API**：全面使用 `<script setup>` 语法，代码简洁
- **响应式数据共享**：通过独立 JS 模块导出 `ref` 对象，实现跨组件状态共享（购物车、订单）
- **自定义品牌视觉**：登录/注册页独立设计，蜜雪冰城红色系渐变、卡片阴影、SVG 图标、Hover 过渡动画
- **原子化 CSS**：全局工具类（`main.css`）覆盖宽高、内外边距、颜色、边框等常用样式
- **组件化思想**：Header、Carousel、Search 等通用模块抽取为独立组件

## 后续可优化方向

- [ ] 引入 **Pinia** 做正式状态管理，替代共享 `ref` 模块
- [ ] 接入后端 API（Axios），替代静态数据
- [ ] 购物车数据 **localStorage** 持久化，解决刷新丢失
- [ ] 添加 **TypeScript** 类型约束
- [ ] 登录注册接入真实认证（JWT）
- [ ] 响应式适配移动端

## 作者

- 郑文（36号）
- 期末 Vue 课程项目
