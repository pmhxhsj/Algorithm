const { off } = require('process');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on('line', function (line) {
  input.push(line);
  if (input.length === 2) {
    rl.close();
  }
}).on('close', function () {
  const firstStr = input.shift().split('');
  const secondStr = input.shift().split('');
  const maxLen = Math.max(firstStr.length, secondStr.length);
  const DP = Array.from(Array(maxLen + 1), () => Array(maxLen + 1).fill(0));

  for (let i = 1; i <= firstStr.length; i++) {
    for (let j = 1; j <= secondStr.length; j++) {
      if (firstStr[i - 1] === secondStr[j - 1]) {
        DP[i][j] = DP[i - 1][j - 1] + 1;
      } else {
        DP[i][j] = Math.max(DP[i][j - 1], DP[i - 1][j]);
      }
    }
  }

  console.log(DP[firstStr.length][secondStr.length]);
});
