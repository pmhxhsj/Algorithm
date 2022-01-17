const fs = require('fs');
let input = fs
  .readFileSync('../input.txt')
  .toString()
  .trim()
  .split('\n')
  .map((v) => +v);

const startNum = input[0];
const endNum = input[1];

const isPrime = (num) => {
  if (num === 1) return false;

  for (let i = 2; i < num; i++) {
    if (num % i === 0) return false;
  }

  return true;
};

let sumPrime = 0;
let min = 10001;
for (let i = startNum; i <= endNum; i++) {
  if (isPrime(i)) {
    min = Math.min(min, i);
    sumPrime += i;
  }
}

if (sumPrime !== 0) {
  console.log(`${sumPrime}
${min}`);
} else {
  console.log(-1);
}
