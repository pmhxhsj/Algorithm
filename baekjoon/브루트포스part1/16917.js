const fs = require('fs');
let input = fs
  .readFileSync('dev/stdin')
  .toString()
  .trim()
  .split(' ')
  .map((v) => +v);

let [seasoning, fried, half, seasoningCount, friedCount] = input;
let answer = 0;
let min = Math.min(seasoningCount, friedCount);
if (seasoning + fried > half * 2) {
  answer += min * half * 2;
  seasoningCount -= min;
  friedCount -= min;

  if (seasoningCount !== 0) {
    if (seasoning > half * 2) {
      answer += half * 2 * seasoningCount;
    } else {
      answer += seasoning * seasoningCount;
    }
  }
  if (friedCount !== 0) {
    if (fried > half * 2) {
      answer += half * 2 * friedCount;
    } else {
      answer += fried * friedCount;
    }
  }
} else {
  answer += seasoningCount * seasoning;
  answer += friedCount * fried;
}

console.log(answer);
