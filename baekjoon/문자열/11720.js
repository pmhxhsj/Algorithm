const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
input.shift();
input = input[0].split('').map((v) => +v);

console.log(input.reduce((prev, cur) => prev + cur, 0));
