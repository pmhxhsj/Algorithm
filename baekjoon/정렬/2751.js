const fs = require('fs');
let input = fs.readFileSync('../input.txt').toString().trim().split('\n');

input.shift();
input = input.sort((a, b) => a - b);

console.log(input.join('\n'));
