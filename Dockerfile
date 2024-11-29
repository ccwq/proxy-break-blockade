# 构建阶段：用于编译TypeScript代码
FROM node:18-alpine as builder

# 设置工作目录
WORKDIR /app

# 设置npm镜像源以加快安装速度
RUN npm config set registry https://mirrors.cloud.tencent.com/npm/

# 首先复制package.json
COPY . .

# 安装pnpm
RUN npm install

# 启动应用
# CMD ["node", "dist/main.js"]
CMD ["npm", "run", "dev"]








