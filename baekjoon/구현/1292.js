const fs = require('fs');
let input = fs.readFileSync('../input.txt').toString().trim().split(' ');
const [start, end] = input;
let number = [];
for (let i = 1; i <= end; i++) {
  for (let j = 0; j < i; j++) {
    number.push(i);
  }

  if (number.length > end) {
    break;
  }
}

const answer = number.slice(start - 1, end).reduce((prev, cur) => prev + cur, 0);

console.log(answer);
