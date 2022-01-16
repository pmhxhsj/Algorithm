const fs = require('fs');
let input = fs
  .readFileSync('../input.txt', 'utf-8')
  .toString()
  .trim()
  .split(' ')
  .map((v) => +v);

const A = input.shift();
const B = input.shift();
const V = input.shift();

console.log(Math.ceil((V - B) / (A - B)));
