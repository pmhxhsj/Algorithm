const fs = require('fs');
let input = fs
  .readFileSync('../input.txt')
  .toString()
  .trim()
  .split(' ')
  .map((v) => +v);

const startNum = input[0];
const endNum = input[1];

const isPrime = (num) => {
  if (num === 1) return false;

  for (let i = 2; i <= Math.sqrt(num); i += 1) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
};

for (let i = startNum; i <= endNum; i++) {
  if (isPrime(i)) {
    console.log(i);
  }
}
