const fs = require('fs');
let [N, K] = fs.readFileSync('../input.txt').toString().trim().split(' ').map(Number);

const dp = Array.from(Array(K), () => Array(N + 1).fill(0));

dp[0] = new Array(N + 1).fill(1);

for (let i = 1; i < K; i++) {
  dp[i][0] = 1;
}

for (let i = 1; i < K; i++) {
  for (let j = 1; j <= N; j++) {
    dp[i][j] = (dp[i - 1][j] + dp[i][j - 1]) % 1000000000;
  }
}
console.log(dp[K - 1][N]);
