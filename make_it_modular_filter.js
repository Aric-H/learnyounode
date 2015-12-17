var fs = require('fs');
var path = require('path');
//导出模块的函数
module.exports = function (dir, filterStr, callback) {
	//读文件夹,回调函数第一个参数表示错误对象,第二个参数表示文件列表
  	fs.readdir(dir, function (err, list) {
    	if (err)
      		return callback(err);
      	//数组的filter方法,参数是一个回调函数,回调函数的参数表示数组的元素,对数组中的每个元素调用回调函数，该方法会返回一个在回调函数中返回true的元素的新的集合
    	list = list.filter(function (file) {
      		return path.extname(file) === '.' + filterStr;
    	})
    	callback(null, list);
 	})
}