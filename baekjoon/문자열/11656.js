const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let input;
rl.on('line', function (line) {
  input = line;
  rl.close();
}).on('close', function () {
  console.log(solution(input).join('\n'));
});

function solution(str) {
  const answer = [];
  let i = 0;
  while (i !== str.length) {
    answer.push(str.substring(i));
    i++;
  }

  return answer.sort();
}
