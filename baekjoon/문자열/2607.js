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
  let answer = 0;

  validation.forEach((v) => {
    const start = [...standard];

    if (Math.abs(v.length - start.length) === 1) {
      if (v.length > start.length) {
        for (let i = 0; i < v.length; i++) {
          if (start.includes(v[i])) {
            const idx = start.indexOf(v[i]);
            start.splice(idx, 1);
          }
        }
        if (start.length === 1) {
          answer++;
        }
      } else if (v.length < start.length) {
        for (let i = 0; i < start.length; i++) {
          if (v.includes(start[i])) {
            const idx = v.indexOf(start[i]);
            v.splice(idx, 1);
          }
        }
        if (v.length === 1) {
          answer++;
        }
      } else {
        for (let i = 0; i < v.length; i++) {
          if (start.includes(v[i])) {
            const idx = start.indexOf(v[i]);
            start.splice(idx, 1);
          }
        }
        if (start.length === 1 || start.length === 0) {
          answer++;
        }
      }
    }
    console.log(v);
  });

  return answer;
}
