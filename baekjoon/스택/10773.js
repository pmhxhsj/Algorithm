const fs = require('fs');
let input = fs
  .readFileSync('../input.txt')
  .toString()
  .trim()
  .split('\n')
  .map((v) => +v);
input.shift();

const answer = [];

input.filter((v) => {
  if (v === 0) {
    answer.pop();
  } else {
    answer.push(v);
  }
});

console.log(answer.reduce((prev, cur) => prev + cur, 0));
