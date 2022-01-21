const fs = require('fs');
let input = fs.readFileSync('../input.txt').toString().trim().split('\n');
const len = +input.shift();
input = input[0]
  .split(' ')
  .map(Number)
  .sort((a, b) => a - b);
//입력값 조정

//풀이
let answer = 0;

for (let i = 0; i < len; i++) {
  const minute = input.reduce((prev, cur) => prev + cur, 0);

  answer += minute;
  input.pop();
}

console.log(answer);
