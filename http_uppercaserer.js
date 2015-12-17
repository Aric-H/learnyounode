var http = require('http');

var map = require('through2-map');
var server = http.createServer(function (req, res) {
  	if (req.method != 'POST')
    	return res.end('send me a POST\n');
    //把请求导入through2-map模块,through2-map模块在回调函数中把数据块转化为字符串并导出到响应
  	req.pipe(map(function (chunk) {
    	return chunk.toString().toUpperCase();
  	})).pipe(res);
})
server.listen(Number(process.argv[2]));