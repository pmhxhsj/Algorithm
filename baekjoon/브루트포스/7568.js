const fs = require('fs');
let input = fs
  .readFileSync('dev/stdin')
  .toString()
  .trim()
  .split('\n')
  .map((v) => v.split(' ').map((v) => +v));
input.shift();

let str = '';
input.filter((v, idx) => {
  let count = 0;
  for (let i = 0; i < input.length; i++) {
    if (v[0] < input[i][0] && v[1] < input[i][1]) {
      count++;
    }
  }
  str += `${count + 1} `;
});

console.log(str.trim());
