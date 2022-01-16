const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

input.shift();

input = input.map((v) => {
  const value = v.split('');
  let score = 0;
  score += confirmContinuity(value);

  console.log(score);
});

function confirmContinuity(arr) {
  let score = 0;
  let count = 0;
  arr.filter((v) => {
    if (v === 'O') {
      count++;
      score += count;
    } else {
      count = 0;
    }
  });

  return score;
}
