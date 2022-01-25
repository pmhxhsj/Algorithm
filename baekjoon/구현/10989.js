const fs = require('fs');
let [input, ...nums] = fs.readFileSync('../input.txt').toString().trim().split('\n');

console.log(nums.sort((a, b) => a - b).join('\n'));
