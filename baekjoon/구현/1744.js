const fs = require('fs');
const [n, ...input] = fs.readFileSync('dev/stdin').toString().trim().split('\n').map(Number);

const negative = [];
const positive = [];
let zero = 0;
let answer = 0;

input.forEach((v) => {
  if (v < 0) {
    negative.push(v);
  } else if (v > 1) {
    positive.push(v);
  } else if (v === 0) {
    zero++;
  } else {
    answer++;
  }
});

negative.sort((a, b) => b - a);
positive.sort((a, b) => a - b);

while (positive.length) {
  if (positive.length === 1) {
    answer += positive.pop();
    break;
  }
  const value = positive.pop();
  const value2 = positive.pop();
  answer += value * value2;

  if (positive.length === 1) {
    answer += positive.pop();
    break;
  }
}

while (negative.length) {
  if (negative.length === 1) {
    if (zero !== 0) {
      zero--;
      break;
    } else {
      answer += negative.pop();
      break;
    }
  }
  if (negative.length % 2 === 1 && zero !== 0) {
    negative.shift();
    zero--;
  }
  const value = negative.pop();
  const value2 = negative.pop();
  answer += value * value2;

  if (negative.length === 1) {
    answer += negative.pop();
    break;
  }
}

console.log(answer);
