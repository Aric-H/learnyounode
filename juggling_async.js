var http = require('http');
var bl = require('bl');
//存储异步请求的结果
var results = [];
//存储请求的次数
var count = 0;
//打印结果
function printResults () {;
  for (var i = 0; i < 3; i++)
    console.log(results[i]);
}
//发起请求,index表示当前请求的次数
function httpGet (index) {
  http.get(process.argv[2 + index], function (response) {
    response.pipe(bl(function (err, data) {
      if (err)
        return console.error(err);
      results[index] = data.toString();
      count++;
      if (count == 3)
        printResults();
    }))
  })
}

for (var i = 0; i < 3; i++)
  httpGet(i);