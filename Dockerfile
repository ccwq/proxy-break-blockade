# 构建阶段：用于编译TypeScript代码
FROM node:18-alpine as builder

# 设置工作目录
WORKDIR /app

# 设置npm镜像源以加快安装速度
RUN npm config set registry https://mirrors.cloud.tencent.com/npm/

# 安装 pnpm
RUN npm install -g pnpm

# 首先复制所有文件
COPY . .

# 安装依赖
RUN pnpm install

# 设置环境变量
ENV DOCKER=true

# 启动应用
CMD ["pnpm", "dev"]
