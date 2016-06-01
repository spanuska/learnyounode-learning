// must accept one or more numbers as CL args and print the sum of those to the console

var nums = process.argv.slice(2);

var sum = nums.reduce(
  function(total, num){ return total + Number(num) }
, 0);

console.log(sum);