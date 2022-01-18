const fs = require('fs');
let input = fs
  .readFileSync('dev/stdin')
  .toString()
  .trim()
  .split('\n')
  .map((v) => +v);
input.shift();

const isPrime = (num) => {
  if (num === 1) return false;

  for (let i = 2; i <= Math.sqrt(num); i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const primeArr = [];

for (let i = 2; i <= 10000; i++) {
  if (isPrime(i)) {
    primeArr.push(i);
  }
}

input.filter((v) => {
  if (primeArr.includes(v / 2)) {
    console.log(`${v / 2} ${v / 2}`);
  } else {
    const arr = [];
    for (let i = 0; i < primeArr.length; i++) {
      for (let j = i + 1; j < primeArr.length; j++) {
        if (primeArr[i] + primeArr[j] === v) {
          arr.push([primeArr[i], primeArr[j]]);
          break;
        }
        if (primeArr[i] > v) {
          break;
        }
      }
    }
    arr.sort((a, b) => {
      const aValue = a[1] - a[0];
      const bValue = b[1] - b[0];

      return aValue - bValue;
    });
    console.log(`${arr[0][0]} ${arr[0][1]}`);
  }
});
