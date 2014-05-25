var fs = require('fs');
fs.readFile(process.argv[2], function callback(err, data)  {
	if (err) {
		throw err;
	}

	content = data;
	processFile(content);
});


function processFile(content) {
	var strContent = content.toString();
	var arr = strContent.split('\n');
	console.log(arr.length -1);
}