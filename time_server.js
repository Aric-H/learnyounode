var net = require('net');
function zeroFill(i) {
  return (i < 10 ? '0' : '') + i; //月份、日、小时和分钟必须用零填充成为固定的两位数
}
function now () {
  var d = new Date();
  return d.getFullYear() + '-' 
    + zeroFill(d.getMonth() + 1) + '-' // 从 0 开始
    + zeroFill(d.getDate()) + ' '		// 返回当前月的日期(多少日)
    + zeroFill(d.getHours()) + ':'
    + zeroFill(d.getMinutes())
}
//服务器每收到一个 TCP 连接，都会调用一次这个回调函数。
var server = net.createServer(function (socket) {
  socket.end(now() + '\n');
})
//process.argv[0]为node,process.argv[1]为js文件,process.argv[2]表示后面的参数
server.listen(Number(process.argv[2]));