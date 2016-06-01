// print a list of files in given directory, filtered by the extension of the files
// directory name is 1st arg passed, ext is 2nd arg

var fs = require('fs');
var path = require('path');
var dir = process.argv[2];
var ext = process.argv[3];

function matchesExt(file) {
	return path.extname(file) === "." + ext
}

fs.readdir(dir, function (err, list) {
  if (err) console.error(err.stack);
  
  var matches = list.filter(matchesExt);
  matches.forEach(function(file){ console.log(file) });
})