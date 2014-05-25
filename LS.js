var fs = require('fs');
var path = require('path');

fs.readdir(process.argv[2], function callback (err, list) {
	if (err) {
		throw err;
	}

	var selected = [];
	var extension = ("." + process.argv[3]);
	for (var i = 0; i <list.length; i++) {
		//console.log("item: " + list[i]);
		//console.log("extension: " + path.extname(list[i]));
		if (path.extname(list[i]) == extension){
			//console.log("PUSHED");
			selected.push(list[i]);

		}
	};

	for (var i = 0; i < selected.length; i++) {
		console.log(selected[i]);
	};




}); 