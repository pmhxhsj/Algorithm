const m = 3;
const n = 50000;
const arr = [
  ['a1', 51200],
  ['a2', 3293],
  ['a2', 51232],
  ['a2', 522],
  ['a2', 52132],
  ['a5', 3214],
  ['a5', 55212],
  ['a2', 42142],
  ['a1', 51232],
];

function solution(m, n, arr) {
  let result = [arr[0]];
  let answer = [];

  for (let i = 1; i < arr.length; i++) {
    if (result[result.length - 1][0] === arr[i][0]) {
      result.push(arr[i]);
      if (i === arr.length - 1) {
        answer.push(result);
      }
    } else {
      answer.push(result);
      result = [arr[i]];
      if (i === arr.length - 1) {
        answer.push(result);
      }
    }
  }
  let count = 0;

  answer.forEach((v) => {
    if (v.length < m) {
      count += v.filter((ele) => ele[1] >= n).length;
    } else {
      v.forEach((ele, idx) => {
        if (idx < m - 1 && ele[1] >= m) {
          count++;
        } else {
          count++;
        }
      });
    }
  });

  return count;
}

solution(m, n, arr);
