const { off } = require('process');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input;

rl.on('line', function (line) {
  input = +line;
  rl.close();
}).on('close', function () {
  const dp = [];

  dp[0] = 0;
  dp[1] = 3;
  dp[2] = 7;
  dp[3] = 17;

  for (let i = 4; i <= input; i++) {
    dp[i] = (dp[i - 1] * 2 + dp[i - 2]) % 9901;
  }

  console.log(dp[input] % 9901);
});
