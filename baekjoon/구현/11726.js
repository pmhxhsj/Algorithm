const fs = require('fs');
const input = +fs.readFileSync('../input.txt').toString().trim();

const DP = {
  1: 1,
  2: 1,
};

for (let i = 3; i <= input; i++) {
  DP[i] = (DP[i - 1] + DP[i - 2]) % 10007;
}

console.log(DP[input]);
