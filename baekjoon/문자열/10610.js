const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let input;
rl.on('line', function (line) {
  input = line.split('').map(Number);
  rl.close();
}).on('close', function () {
  console.log(solution(input));
});

function solution(num) {
  if (!num.includes(0)) {
    return -1;
  }
  if (num.reduce((acc, cur) => acc + cur, 0) % 3 !== 0) {
    return -1;
  }

  num = num.sort((a, b) => b - a);

  return num.join('');
}
