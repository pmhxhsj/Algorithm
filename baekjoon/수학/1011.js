const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let input = [];
rl.on('line', function (line) {
  input.push(line);
  if (input.length === +input[0] + 1) {
    rl.close();
  }
}).on('close', function () {
  let count = +input.shift();
  let x, y, a, b;
  let answer = [];

  for (let i = 0; i < count; i++) {
    let splitedInput = input[i].split(' ');
    x = Number(splitedInput[0]);
    y = Number(splitedInput[1]);
    let distance = y - x;

    if (Math.sqrt(distance) % 1 === 0) {
      answer.push(2 * Math.sqrt(distance) - 1);
    } else {
      a = Math.pow(Math.ceil(Math.sqrt(y - x)), 2);
      b = Math.pow(Math.ceil(Math.sqrt(y - x)) - 1, 2) + 1;

      if ((a + b) / 2 <= distance) {
        answer.push(2 * Math.ceil(Math.sqrt(y - x)) - 1);
      } else {
        answer.push(2 * Math.ceil(Math.sqrt(distance)) - 2);
      }
    }
    console.log(answer[answer.length - 1]);
  }
});
