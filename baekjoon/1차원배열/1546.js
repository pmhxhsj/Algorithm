const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let arr = [];
rl.on('line', function (line) {
  arr.push(line);

}).on('close', function () {
  let [count, score] = [arr[0], arr[1].split(' ').map(Number)];

  const max = Math.max(...score);

  score = score.map((v) => (v / max) * 100);

  console.log(score.reduce((prev, cur) => prev + cur, 0) / count);
  process.exit();
});