const fs = require('fs');
let [len, ...input] = fs
  .readFileSync('dev/stdin')
  .toString()
  .trim()
  .split('\n')
  .map((v) => v.split(''));
len = +len.join('');
let MAX = eatCandyCount(input);

for (let i = 0; i < len; i++) {
  for (let j = 0; j < len - 1; j++) {
    if (input[i][j] !== input[i][j + 1]) {
      [input[i][j], input[i][j + 1]] = [input[i][j + 1], input[i][j]];
      MAX = Math.max(MAX, eatCandyCount(input));
      [input[i][j + 1], input[i][j]] = [input[i][j], input[i][j + 1]];
    }
  }
} // 좌우 값이 다르면 값 바꿔주고 캔디 개수 세고 다시 본래의 값으로 바꿔주기

for (let i = 0; i < len - 1; i++) {
  for (let j = 0; j < len; j++) {
    if (input[i][j] !== input[i + 1][j]) {
      [input[i][j], input[i + 1][j]] = [input[i + 1][j], input[i][j]];
      MAX = Math.max(MAX, eatCandyCount(input));
      [input[i + 1][j], input[i][j]] = [input[i][j], input[i + 1][j]];
    }
  }
} // 상하 값이 다르면 값 바꿔주고 캔디세고 다시 본래의 값으로 바꿔주기

console.log(MAX); // 최대값 출력

function eatCandyCount(arr) {
  let MAX = 0;

  for (let i = 0; i < len; i++) {
    let count = 0;
    let value = arr[i][0];
    for (let j = 0; j < len; j++) {
      if (arr[i][j] === value) {
        count++;
      } else {
        MAX = Math.max(MAX, count);
        count = 1;
        value = arr[i][j];
      }
      if (j === len - 1) MAX = Math.max(MAX, count);
    }
  } // 행으로 돌면서 연속된 같은 사탕 개수 세기

  for (let i = 0; i < len; i++) {
    let count = 0;
    let value = arr[0][i];
    for (let j = 0; j < len; j++) {
      if (arr[j][i] === value) {
        count++;
      } else {
        MAX = Math.max(MAX, count);
        count = 1;
        value = arr[j][i];
      }
      if (j === len - 1) MAX = Math.max(MAX, count);
    }
  } // 열로 돌면서 연속된 같은 사탕 개수 세기

  return MAX; // 가장 큰 값 return
}
