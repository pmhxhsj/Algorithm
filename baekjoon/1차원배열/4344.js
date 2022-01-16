const fs = require('fs');
let input = fs.readFileSync('dev/stdin').toString().trim().split('\n');
input.shift();

input = input
  .map((v) => v.split(' '))
  .map((v) => v.map((v) => +v))
  .filter((v) => v.shift());

input.filter((v) => {
  const avg = v.reduce((prev, cur) => prev + cur) / v.length;
  let count = 0;
  v.filter((v1) => {
    if (v1 > avg) {
      count++;
    }
  });

  console.log(((count / v.length) * 100).toFixed(3) + '%');
});
