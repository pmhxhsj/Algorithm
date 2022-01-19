const fs = require('fs');
let input = fs.readFileSync('dev/stdin').toString().trim().split('\n');
input.shift();
input = input[0].split(' ');

let inputArr = [...input];
inputArr = [...new Set(inputArr)].sort((a, b) => a - b);

const arr = [];
const obj = {};

inputArr.forEach((v, idx) => (obj[v] = idx));

for (let i = 0; i < input.length; i++) {
  arr.push(obj[input[i]]);
}

console.log(arr.join(' '));
