const fs = require('fs');
let input = fs
  .readFileSync('dev/stdin')
  .toString()
  .trim()
  .split('\n')
  .map((v) => +v);

input.shift();

const value = [[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]];
let idx = 0;

while (value.length !== 15) {
  let arr = [];
  let count = 0;
  for (let i = 0; i < 14; i++) {
    count += value[idx][i];
    arr.push(count);
  }

  value.push(arr);
  idx++;
}

while (input.length !== 0) {
  const first = input.shift();
  const second = input.shift();

  console.log(value[first][second - 1]);
}
