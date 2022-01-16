const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const count = +input[0];
let score = input[1].split(' ').map((v) => +v);

const max = Math.max(...score);

score = score.map((v) => (v / max) * 100);

console.log(score.reduce((prev, cur) => prev + cur, 0) / count);
