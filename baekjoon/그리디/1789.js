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
  let count = 0;
  let i = 1;
  let arr = [];
  while (count <= input) {
    count += i;
    arr.push(i);
    i++;
  }
  console.log(i - 2);
});
