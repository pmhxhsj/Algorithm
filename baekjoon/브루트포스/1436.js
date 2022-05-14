const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let N;
rl.on('line', function (line) {
  N = +line;
  rl.close();
}).on('close', function () {
  let count = 1;
  let num = 666;

  while (count !== N) {
    num++;
    if (String(num).includes('666')) count++;
  }

  console.log(num);
});
