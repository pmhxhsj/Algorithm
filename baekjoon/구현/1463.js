const fs = require('fs');
let input = +fs.readFileSync('../input.txt').toString().trim();

const DP = new Array(input + 1).fill(0);

for (let i = 2; i <= input; i++) {
  DP[i] = DP[i - 1] + 1;
  if (i % 2 === 0) {
    DP[i] = Math.min(DP[i / 2] + 1, DP[i]);
  }
  if (i % 3 === 0) {
    DP[i] = Math.min(DP[i / 3] + 1, DP[i]);
  }

  console.log(DP);
}

console.log(DP[input]);
