// Write a program that uses a single synchronous filesystem operation to read a file and print the number of newlines (\n) it contains to the console (stdout), similar to running cat file | wc -l.
// The full path to the file to read will be provided as the first command-line argument (i.e., process.argv[2]). You do not need to make your own test file.  

var fs = require('fs') 
var file = process.argv[2];

var stringFromFile = fs.readFileSync(file).toString();
// or var stringFromFile = fs.readFileSync(file, 'utf8');
var newLineCount = stringFromFile.split('\n').length - 1;

console.log(newLineCount);