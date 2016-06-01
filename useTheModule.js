var mod = require('./makeItModularModule');
var dir = process.argv[2];
var ext = process.argv[3];

function printTheThings(array) {
  array.forEach(function(element) {
    console.log(element);
  })
}

mod(dir, ext, function(err, data) {
  if (err) return console.error(err);

  printTheThings(data);
});