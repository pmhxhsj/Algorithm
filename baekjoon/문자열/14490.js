const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let input;
rl.on('line', function (line) {
  input = line.split(':').map(Number);
  rl.close();
}).on('close', function () {
  console.log(solution(input));
});

function solution(num) {
  let cnt = 2;
  while (true) {
    if (cnt > Math.min(...num)) {
      break;
    }
    if (num[0] % cnt === 0 && num[1] % cnt === 0) {
      num[0] /= cnt;
      num[1] /= cnt;
    } else {
      cnt++;
    }
  }

  return `${num[0]}:${num[1]}`;
}
