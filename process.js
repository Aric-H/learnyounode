var result = 0

for (var i = 2; i < process.argv.length; i++){
	//Number是Javascript方法，可以把对象转换为数字类型
	result += Number(process.argv[i]);
} 

console.log(result);