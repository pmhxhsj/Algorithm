const fs = require('fs');
let [n, ...input] = fs.readFileSync('../input.txt').toString().trim().split('\n');
n = +n;
input = input[0].split(' ').map(Number);

const DP = [0, ...input];

for (let i = 2; i < DP.length; i++) {
  for (let j = 1; j < i; j++) {
    DP[i] = Math.max(DP[i], DP[i - j] + DP[j]);
  }
}

console.log(DP[n]);
