const fs = require('fs');
let input = fs.readFileSync('../input.txt').toString().trim().split('\n');
input.shift();

const count = {};
const number = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

input.forEach((value) => {
  [...value].forEach((value2, idx) => {
    if (!count[value2]) count[value2] = 0;
    count[value2] += 10 ** (value.length - idx - 1);
  });
});

console.log(
  Object.values(count)
    .sort((a, b) => b - a)
    .reduce((prev, cur, i) => prev + cur * number.pop(), 0)
);
