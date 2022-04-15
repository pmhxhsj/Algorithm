const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input;
rl.on('line', function (line) {
  input = line.split(' ').map(Number);

  rl.close();
}).on('close', function () {
  const value = [...input].sort((a, b) => a - b).join(' ');
  let i = 0;

  while (true) {
    i++;
    if (input[i - 1] > input[i]) {
      [input[i], input[i - 1]] = [input[i - 1], input[i]];
      console.log(input.join(' '));
    }
    if (i === input.length - 1) {
      if (value === input.join(' ')) {
        break;
      } else {
        i = 0;
      }
    }
  }
});
