const fs = require('fs');
let input = +fs.readFileSync('dev/stdin').toString().trim();

function factorial(num) {
  if (num <= 1) return 1;

  return num * factorial(num - 1);
}

console.log(factorial(input));
