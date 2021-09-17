var http = require('http');
var querystring = require('querystring');

//创建服务器
var server = http.createServer(function (req, res) {
  console.log(req, res);
});
//设置监听端口
server.listen(3000, "127.0.0.1", function () {
    console.log("server is started listen port 3000");
});