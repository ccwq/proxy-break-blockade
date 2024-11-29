# Vite 代理配置项目

这是一个基于 Vite.js 的 API 代理转发服务。本项目主要用于解决某些 API 服务在特定地区访问受限的问题，通过配置 Vite 的代理功能，实现请求转发，从而确保服务的正常访问。

## 功能特点
- 基于 Vite.js 构建
- 灵活的代理配置，支持多个 API 端点转发
- 支持请求路径重写和 URL 重定向
- 内置跨域（CORS）支持
- 支持 Docker 部署，便于在各种环境中快速部署

## 快速开始

### 环境要求
- Node.js
- pnpm

### 安装步骤
1. 克隆仓库
2. 安装依赖：
```bash
pnpm install
```

### 开发
运行开发服务器：
```bash
pnpm dev
```

### 构建
构建生产版本：
```bash
pnpm build
```

### Docker 部署
使用 Docker 构建和运行：
```bash
docker-compose up
```
