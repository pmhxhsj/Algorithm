const fs = require('fs');
let input = +fs.readFileSync('dev/stdin').toString().trim();

const isPrime = (num) => {
  if (num === 1) return false;

  for (let i = 2; i <= Math.sqrt(num); i += 1) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
};

const isPalindrome = (num) => {
  let stringNum = String(num);
  const len = stringNum.length / 2;
  let first = '';
  let last = '';

  if (stringNum.length % 2 === 1) {
    for (let i = 0; i < len - 1; i++) {
      first += stringNum[i];
    }
    for (let i = stringNum.length - 1; i > len; i--) {
      last += stringNum[i];
    }
  } else {
    for (let i = 0; i < len; i++) {
      first += stringNum[i];
    }
    for (let i = stringNum.length - 1; i > len - 1; i--) {
      last += stringNum[i];
    }
  }

  if (first === last) {
    return true;
  }
  return false;
};

for (let i = input; i < Number.MAX_SAFE_INTEGER; i++) {
  if (isPrime(i) && isPalindrome(i)) {
    console.log(i);
    break;
  }
}
