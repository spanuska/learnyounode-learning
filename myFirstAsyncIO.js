// Write a program that uses a single asynchronous filesystem operation toread a file and print the number of newlines it contains to the console(stdout), similar to running cat file | wc -l.
// The full path to the file to read will be provided as the first command-line argument.

var fs = require('fs') 
var file = process.argv[2];

var stringFromFile = fs.readFile(file, 'utf8', function(err, data) {
  if (err) console.error(err.stack);

  var lineCount = data.split('\n').length - 1
  console.log(lineCount);
});