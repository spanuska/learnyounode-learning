// make a module
// create a program that prints a list of files in a given directory.... (like the last exercise)
// do most of the work in the module file; the module must export a single function that takes 3 args: directory name, filename extension string, and a callback function
// contract to follow:
// » Export a single function that takes exactly the arguments described.        
// » Call the callback exactly once with an error or some data as described.     
// » Don't change anything else, like global variables or stdout.                
// » Handle all the errors that may occur and pass them to the callback. 

var fs = require('fs');
var path = require('path');

function readAndFilterDirectory(dir, ext, callback) {
  function matchesExt(file) {
    return path.extname(file) === "." + ext
  }

  fs.readdir(dir, function (err, list) {
    if (err) return callback(err);
  
    var matches = list.filter(matchesExt);
    callback(null, matches);
  })
}

module.exports = readAndFilterDirectory;