//filterFn就表示导出的函数
var filterFn = require('./make_it_modular_filter.js');
//第二个参数表示文件目录
var dir = process.argv[2];
//第三个参数表示需要过滤的文件的扩展名
var filterStr = process.argv[3];

filterFn(dir, filterStr, function (err, list) {
  	if (err)
    	return console.error('There was an error:', err);
  	list.forEach(function (file) {
    	console.log(file);
  	})
})