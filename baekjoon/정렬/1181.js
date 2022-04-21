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
  input.shift();
  const inputStrArr = [...new Set(input)];

  inputStrArr.sort();
  inputStrArr.sort((a, b) => {
    if (a.length === b.length) {
      return 0;
    }
    return a.length - b.length;
  });

  console.log(inputStrArr.join('\n'));
});
