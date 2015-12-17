var http = require('http');

//使用http模块发起一个get请求,第一个参数是请求的url,第二个参数是回调函数,回调函数的参数代表请求的响应
http.get(process.argv[2], function (response) {
  	response.setEncoding('utf8');
  	response.on('data', console.log);
  	response.on('error', console.error);
})