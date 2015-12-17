var http = require('http');
var bl = require('bl');
//还有一种方法就是把所有的"data"事件的到的数据收集起来,暂存并追加在一起,通过监听"end"事件判断stream是否传输完成,如果传输结束,可以将收集的结果打印出来
http.get(process.argv[2], function (response) {
	//这里使用第三方模块bl,bl模块会自动收集数据,一旦stream传输完成,执行回调函数,这个函数会带上所收集的数据
  	response.pipe(bl(function (err, data) {
    	if (err)
      		return console.error(err);
    	data = data.toString();
    	console.log(data.length);
    	console.log(data);
  	})); 
});
