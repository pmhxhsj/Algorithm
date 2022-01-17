const fs = require('fs');
let input = fs.readFileSync('dev/stdin').toString().trim().split('\n');
input.shift();
input = input[0].split(' ').map((v) => +v);

const isPrime = (num) => {
  if (num === 1) return false;
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
};

let count = 0;

input.filter((v) => {
  if (isPrime(v)) {
    count++;
  }
});

console.log(count);
