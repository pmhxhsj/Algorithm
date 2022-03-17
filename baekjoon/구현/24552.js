const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input;
rl.on('line', function (line) {
  input = line.split('');
  rl.close();
}).on('close', function () {
  console.log(validation(input));
});

function validation(input) {
  let left = 0;
  let right = 0;
  let count = 0;

  for (let i = 0; i < input.length; i++) {
    if (input[i] === '(') {
      left += 1;
      count += 1;
    }
    if (input[i] === ')') {
      right += 1;
      count -= 1;
    }
    if (count < 0) {
      return right;
    }
    if (count === 0) {
      left = 0;
    }
  }
  return left;
}
