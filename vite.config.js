import { defineConfig } from 'vite'
import { readFileSync } from 'fs'
import { parse } from 'yaml'
import { resolve } from 'path'

// 读取代理配置文件
const proxyConfig = parse(readFileSync(resolve(__dirname, 'proxy.config.yml'), 'utf8'))

// 构建代理配置
const buildProxyConfig = (proxies) => {
  const config =  proxies.reduce((config, proxy) => {
    if (proxy.simple) {
      // 简单字符串配置
      config[`/${proxy.id}`] = proxy.url
    } else {
      // 完整配置
      config[`/${proxy.id}`] = {
        target: proxy.url,
        changeOrigin: true,
        rewrite: (path) => path.replace(new RegExp(`^/${proxy.id}`), ''),
        ws: proxy.ws || false
      }
    }
    return config
  }, {})

   debugger
  return config
}

export default defineConfig({
  // 基本配置
  base: '/', // 开发或生产环境服务的公共基础路径
  publicDir: 'public', // 静态资源服务的文件夹
  
  // 开发服务器配置
  server: {
    host: true, // 监听所有地址
    port: 51731, // 开发服务器端口号
    open: true, // 自动打开浏览器
    cors: true, // 允许跨域
    proxy: buildProxyConfig(proxyConfig.proxies)
  },

  // 构建配置
  build: {
    outDir: 'dist', // 输出路径
    assetsDir: 'assets', // 静态资源的存放路径
    sourcemap: false, // 是否生成 source map
    minify: 'terser', // 混淆器
    terserOptions: {
      compress: {
        drop_console: true, // 生产环境去除 console
        drop_debugger: true, // 生产环境去除 debugger
      },
    },
  },

  // 别名配置
  resolve: {
    alias: {
      '@': '/src', // 设置 @ 指向 src 目录
      '@components': '/src/components',
    },
  },
})
