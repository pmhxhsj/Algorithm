const fs = require('fs');
let input = fs.readFileSync('../input.txt').toString().trim().split('\n');
input.shift();
input = input[0].split(' ').map((v) => +v);

let arr = [];
let answer = new Array(input.length).fill(-1);

for (let i = 0; i < input.length; i++) {
  while (arr.length && input[arr[arr.length - 1]] < input[i]) {
    answer[arr.pop()] = input[i];
  }
  arr.push(i);
}
console.log(answer.join(' '));
