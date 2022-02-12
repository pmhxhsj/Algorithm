const isPrime = (num) => {
  if (num === 1 || num === 0) return false;

  for (let i = 2; i <= Math.sqrt(num); i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

function solution(n, k) {
  const parseToNum = n.toString(k).split('0');
  let count = 0;

  parseToNum.forEach((v) => {
    if (isPrime(+v)) {
      count++;
    }
  });

  return count;
}
