const fs = require('fs');
let input = fs
  .readFileSync('../input.txt')
  .toString()
  .trim()
  .split('\n')
  .map((v) => +v);
input.pop();

console.log(input);
const isPrime = (num) => {
  if (num === 1) return false;

  for (let i = 2; i <= Math.sqrt(num); i += 1) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
};

input.filter((v) => {
  let count = 0;
  for (let i = v + 1; i <= v * 2; i++) {
    if (isPrime(i)) {
      count++;
    }
  }
  console.log(count);
});
