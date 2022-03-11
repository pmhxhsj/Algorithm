const fs = require('fs');
let [n, ...input] = fs.readFileSync('../input.txt').toString().trim().split('\n');
input = input.map((v) => v.split(' ').map(Number));

const dp = [input[0]];

for (let i = 1; i < input.length; i++) {
  const red = input[i][0] + Math.min(dp[i - 1][1], dp[i - 1][2]);
  const blue = input[i][1] + Math.min(dp[i - 1][0], dp[i - 1][2]);
  const green = input[i][2] + Math.min(dp[i - 1][0], dp[i - 1][1]);

  dp.push([red, blue, green]);
}

console.log(Math.min(...dp[+n - 1]));
