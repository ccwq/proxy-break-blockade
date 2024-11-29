# Vite 代理配置项目

这是一个基于 Vite.js 的 API 代理转发服务。本项目主要用于解决某些 API 服务在特定地区访问受限的问题，通过配置 Vite 的代理功能，实现请求转发，从而确保服务的正常访问。

## 功能特点
- 基于 Vite.js 构建
- 灵活的代理配置，支持多个 API 端点转发
- 支持请求路径重写和 URL 重定向
- 内置跨域（CORS）支持
- 支持 Docker 部署，便于在各种环境中快速部署



## 代理配置说明

### 配置文件
代理配置位于 `proxy.config.yml` 文件中，支持多种配置方式：

```yaml
proxies:
  # 标准 API 代理配置
  - id: api1
    url: https://api.example.com
    ws: true  # 启用 WebSocket 支持

  # 简单代理配置
  - id: api2
    url: http://api2.example.com
    simple: true  # 使用简单字符串配置

  # 自定义路径模式配置
  - id: custom
    url: http://custom.example.com
    pattern: "^/custom/.*"  # 自定义路径匹配模式
```

### 配置项说明
- `id`: 代理标识符，用于生成访问路径
- `url`: 目标服务器地址
- `ws`: （可选）是否启用 WebSocket 支持
- `simple`: （可选）是否使用简单字符串配置
- `pattern`: （可选）自定义路径匹配模式

### 访问说明

#### 标准代理访问
对于标准配置（如上面的 api1），访问格式为：
```
http://localhost:51731/api1/path/to/resource
```
将被转发到：
```
https://api.example.com/path/to/resource
```

#### 简单代理访问
对于简单配置（如上面的 api2），访问格式为：
```
http://localhost:51731/api2/path/to/resource
```
将被直接转发到：
```
http://api2.example.com/path/to/resource
```

#### 自定义模式访问
对于自定义路径模式配置（如上面的 custom），访问将根据配置的 pattern 进行匹配和转发。

### 示例
1. 访问 X.AI API：
```
http://localhost:51731/xai/v1/chat/completions
```

2. 访问 Mistral API：
```
http://localhost:51731/mistral/v1/chat/completions
```


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

## 注意事项
1. 确保目标 API 服务器允许代理访问
2. 某些 API 可能需要在请求头中携带认证信息
3. 使用 HTTPS 时，确保证书配置正确
4. 建议在生产环境中配置适当的安全措施
