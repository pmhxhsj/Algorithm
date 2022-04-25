const { off } = require('process');
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

  const firstStr = input[0];
  const validationStr = input.slice(1);

  console.log(
    solution(
      firstStr.split(''),
      validationStr.map((v) => v.split(''))
    )
  );
});

function solution(standard, validation) {
  return validation.filter((v) => {
    if (Math.abs(v.length - standard.length) > 1) {
      return;
    }
    return (
      v.length === v.filter((ele) => standard.includes(ele)).length ||
      v.length === v.filter((ele) => standard.includes(ele)).length - 1 ||
      v.length === v.filter((ele) => standard.includes(ele)).length + 1
    );
  }).length;
}
