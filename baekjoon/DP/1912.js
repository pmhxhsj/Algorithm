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
  input.shift();
  const numArr = input[0].split(' ').map(Number);

  const DP = [];

  for (let i = 0; i < numArr.length; i++) {
    DP[i] = numArr[i];
    if (DP[i] < DP[i - 1] + numArr[i]) {
      DP[i] = DP[i - 1] + numArr[i];
    }
  }

  console.log(Math.max(...DP));
});
