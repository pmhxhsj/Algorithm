const input = require('fs').readFileSync('dev/stdin').toString().trim().split('-');

function sumValue(arr) {
  if (!arr.length) return 0;
  return +arr.split('+').reduce((pre, cur) => +pre + +cur);
}

console.log(input.reduce((prev, cur) => prev - sumValue(cur), sumValue(input[0]) * 2));
