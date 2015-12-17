var fs = require('fs');
var file = process.argv[2];

//异步IO
fs.readFile(file, function (err, contents) {
  // 也可以使用fs.readFile(file, 'utf8', callback),如果没有注明编码格式,则contents是一个Buffer对象,使用使用toString()方法转字符串
  var lines = contents.toString().split('\n').length - 1;
  console.log(lines);
})