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
  const dp = Array.from(Array(input + 1), () => new Array());

  dp[1] = [1, 1, 1, 1, 1, 1, 1, 1, 1];
  dp[2] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  for (let i = 3; i <= input; i++) {
    for (let j = 0; j < dp[i - 1].length; j++) {
      const value = [...dp[i - 1]];

      dp[i][j] = value.slice(0, j + 1).reduce((acc, cur) => acc + cur) % 10007;
    }
  }

  console.log(dp[input].reduce((acc, cur) => acc + cur) % 10007);
});
