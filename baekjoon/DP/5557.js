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
  input = input[1].split(' ').map(Number);
  const targetNumber = input.pop();
  const numbers = input;
  let count = 0;

  function dfs(depth, sum) {
    if (depth === numbers.length) {
      if (sum === targetNumber) {
        count++;
      }
      return;
    }
    if (sum < 0 || sum > 20) {
      return;
    }
    dfs(depth + 1, sum + numbers[depth]);
    dfs(depth + 1, sum - numbers[depth]);
  }

  dfs(0, 0);

  console.log(count);
});
