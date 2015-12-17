var http = require('http');
var url = require('url');
function parsetime (time) {
  return {
    hour: time.getHours(),
    minute: time.getMinutes(),
    second: time.getSeconds()
  }
}
function unixtime (time) {
  return { unixtime : time.getTime() }
}
var server = http.createServer(function (req, res) {
    //url.parse()方法,如果第二个参数为true表示使用querystring模块解析请求参数为对象,默认为false,即不解析参数
    var parsedUrl = url.parse(req.url, true);
    //req.url = '/api/parsetime?iso=2013-08-10T12:10:15.474Z'.javascript创建Date对象可以传入一个表示时间的字符串
    var time = new Date(parsedUrl.query.iso);
    var result;
    //以/api/parsetime开头
    if (/^\/api\/parsetime/.test(req.url))
        result = parsetime(time);
    //以/api/unixtime开头
    else if (/^\/api\/unixtime/.test(req.url))
        result = unixtime(time);
    if (result) {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        //JSON.stringify用于把json对象转字符串
        res.end(JSON.stringify(result));
    } else {
        res.writeHead(404);
        res.end();
    }
})
server.listen(Number(process.argv[2]));