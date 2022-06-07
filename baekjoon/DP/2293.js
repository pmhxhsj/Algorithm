const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let input = [];
rl.on('line', function (line) {
  input.push(line);
  if (input.length === +input[0].split(' ')[0] + 1) {
    rl.close();
  }
}).on('close', function () {
  const money = +input.shift().split(' ')[1];
  const coins = input.map(Number);

  let dp = new Array(money + 1).fill(0);

  dp[0] = 1;

  for (let i = 0; i < coins.length; i++) {
    for (let j = coins[i]; j <= money; j++) {
      if (j - coins[i] >= 0) {
        dp[j] += dp[j - coins[i]];
      }
    }
  }

  console.log(dp[money]);
});
