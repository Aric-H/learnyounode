var fs = require('fs');

//同步IO。也可以使用fs.readFileSync([encoding,]path)方法,如果指定编码格式,则返回的是字符串,否则返回Buffer对象
var contents = fs.readFileSync(process.argv[2]);
var lines = contents.toString().split('\n').length - 1;
console.log(lines);