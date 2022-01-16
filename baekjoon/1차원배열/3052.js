const fs = require('fs');
let input = fs
  // .readFileSync('/dev/stdin')
  .readFileSync('../input.txt')
  .toString()
  .trim()
  .split('\n')
  .map((v) => +v);

const map = new Map();

input.filter((value) => {
  map.set(value % 42);
});

console.log(map.size);
