var http = require('http');
var fs = require('fs');

var server = http.createServer(function (req, res) {
	//等价于res.statusCode = 200; res.setHeader("Content-Type","text/plain;charset=utf-8");
  	res.writeHead(200, { 'content-type': 'text/plain' });
  	//根据第四个参数创建流，导向res请求响应
  	fs.createReadStream(process.argv[3]).pipe(res);
})

server.listen(Number(process.argv[2]));