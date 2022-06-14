// 1. 引入express
const express = require('express')
// 2. 创建应用对象
const app = express()
// 3. 创建路由规则
// request 是对请求报文的封装
// response 是对响应报文的封装
app.get('/server', (request, response) => {
  // 设置响应头 
  response.setHeader('Access-Control-Allow-Origin', "*")
  // 设置响应
  response.send('HELLO EXPRESS')
})
app.post('/postserver', (requset, response) => {
  response.setHeader('Access-Control-Allow-Origin', '*')
  let data = {
    name: 'zhangsan',
    age: 18
  }
  let str = JSON.stringify(data)
  response.send(str)
})
app.get('/ie', (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.send('ie缓存-2')
})
app.get('/delay', (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*')
  setTimeout(() => {
    res.send('超时响应')
  }, 3000)
})
// 4. 监听端口 启动服务
app.listen(8000, () => {
  console.log('服务启动成功，8000端口监听中...');
})