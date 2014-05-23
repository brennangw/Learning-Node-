var fs = require('fs');
var toCount = fs.readFileSync(process.argv[2]).toString();
var arr = toCount.split('\n');
console.log(arr.length -1);