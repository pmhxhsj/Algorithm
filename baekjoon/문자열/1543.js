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
  console.log(solution(input[0], input[1]));
});

function solution(str1, str2) {
  let count = 0;
  while (true) {
    if (str1.includes(str2)) {
      let idx = str1.indexOf(str2);
      str1 = str1.substring(idx + str2.length);
      count++;
    } else {
      break;
    }
  }

  return count;
}
