const fs = require('fs');
let input = +fs.readFileSync('dev/stdin').toString().trim();

function fibonacci(num) {
  if (num <= 1) return num;

  return fibonacci(num - 1) + fibonacci(num - 2);
}

console.log(fibonacci(input));
