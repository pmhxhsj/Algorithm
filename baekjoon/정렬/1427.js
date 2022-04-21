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
  input.sort((a, b) => b - a);

  console.log(input.join(''));
});
