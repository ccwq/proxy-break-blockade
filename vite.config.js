import { defineConfig } from 'vite'
const proxyList = [
  {
    id:"xai",
    url:"https://api.x.ai"
  },
  {
    id: "mistral",
    url: "https://api.mistral.ai"
  }
]

const proxysConf = proxyList.reduce((pre, cur) => {
  pre[`^/${cur.id}/.*`] = {
    target: cur.url,
    changeOrigin: true,
    rewrite: (path) => path.replace(`^/${cur.id}`, ''),
  }
  return pre
}, {})

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
    proxy: {
      // 字符串简写写法
      '/aaa': 'http://git.frp.trmap.cn/',
      
      // 选项写法
      '/xai': {
        target: 'https://api.x.ai/',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/xai/, ''),
        // 如果要代理 WebSockets
        ws: true,
      },
      // 选项写法
      '/mistral': {
        target: 'https://api.mistral.ai/',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/mistral/, ''),
        // 如果要代理 WebSockets
        ws: true,
      },
      
      // 正则表达式写法
      '^/fallback/.*': {
        target: 'http://api.example.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/fallback/, ''),
      },
    },
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
