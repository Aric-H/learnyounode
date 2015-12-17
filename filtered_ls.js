var fs = require('fs');
var path = require('path');
//fs.readdir(dirPath,callback)
fs.readdir(process.argv[2], function (err, list) {
	//chrome和firefox支持数组的forEach方法array.forEach(function(item){});
	list.forEach(function (file) {
		//fs.extname(fileName)方法用于读取文件扩展名
	    if (path.extname(file) === '.' + process.argv[3])
	      	console.log(file);
	})
})