document.querySelector('#app').innerHTML = `
  <div>
    <h1>Vite 代理配置项目</h1>
    <p>这是一个基于 Vite.js 的 API 代理转发服务，用于解决某些 API 服务在特定地区访问受限的问题。</p>
    
    <h2>主要功能</h2>
    <ul>
      <li>基于 Vite.js 构建的高性能代理服务</li>
      <li>支持多个 API 端点转发</li>
      <li>支持请求路径重写和 URL 重定向</li>
      <li>内置跨域（CORS）支持</li>
      <li>支持 Docker 部署</li>
    </ul>

    <h2>使用方法</h2>
    <h3>1. 标准代理访问</h3>
    <pre>http://localhost:51731/api1/path/to/resource</pre>
    <p>将被转发到：</p>
    <pre>https://api.example.com/path/to/resource</pre>

    <h3>2. API 示例</h3>
    <p>访问 X.AI API：</p>
    <pre>http://localhost:51731/xai/v1/chat/completions</pre>
    
    <p>访问 Mistral API：</p>
    <pre>http://localhost:51731/mistral/v1/chat/completions</pre>

    <h2>配置说明</h2>
    <p>代理配置位于 proxy.config.yml 文件中，支持以下配置项：</p>
    <ul>
      <li>id: 代理标识符，用于生成访问路径</li>
      <li>url: 目标服务器地址</li>
      <li>ws: (可选) 是否启用 WebSocket 支持</li>
      <li>simple: (可选) 是否使用简单字符串配置</li>
      <li>pattern: (可选) 自定义路径匹配模式</li>
    </ul>

    <h2>快速开始</h2>
    <h3>本地开发</h3>
    <pre>pnpm install
pnpm dev</pre>

    <h3>Docker 部署</h3>
    <pre>docker-compose up -d</pre>
  </div>
`