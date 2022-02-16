const fs = require('fs');
let [input, ...matrix] = fs.readFileSync('../input.txt').toString().trim().split('\n');
input = input.split(' ');
const [num, location] = [+input.pop(), input.map(Number)];
matrix = matrix.map((v) => v.split(' ').map(Number));

console.log(solution(matrix));

function solution(arr) {
  if (verification(arr)) {
    return 0;
  }
  let count = 1;
  let answer = R_Calculate(arr);

  if (verification(answer)) {
    return count;
  }

  while (count < 100) {
    count++;
    if (answer.length >= answer[0].length) {
      answer = R_Calculate(answer);
    } else {
      answer = C_Calculate(answer);
    }

    if (verification(answer)) {
      return count;
    }
  }

  return -1;
}

function verification(input) {
  if (
    input.length >= location[0] &&
    input[0].length >= location[1] &&
    input[location[0] - 1][location[1] - 1] === num
  ) {
    return true;
  } else {
    return false;
  }
}

function R_Calculate(arr) {
  const result = countNumber(arr);

  const maxLength = Math.max(...result.map((v) => v.length));

  return result.map((v) => {
    while (v.length !== maxLength) {
      v.push(0);
    }
    return v;
  });
}

function C_Calculate(arr) {
  const reverseMatrix = Array.from(Array(arr[0].length), () => Array(arr.length).fill(0));
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      reverseMatrix[j][i] = arr[i][j];
    }
  }

  const result = countNumber(reverseMatrix);

  const maxLength = Math.max(...result.map((v) => v.length));

  const reverseResultMatrix = Array.from(Array(maxLength), () => Array(result.length).fill(0));

  for (let i = 0; i < result.length; i++) {
    for (let j = 0; j < result[i].length; j++) {
      reverseResultMatrix[j][i] = result[i][j];
    }
  }

  return reverseResultMatrix;
}

function countNumber(arr) {
  const result = arr.map((v) => {
    const obj = {};

    for (let j = 0; j < v.length; j++) {
      if (v[j] === 0) continue;
      !obj[v[j]] ? (obj[v[j]] = 1) : obj[v[j]]++;
    }

    const value = Object.entries(obj)
      .sort((a, b) => {
        if (a[1] !== b[1]) {
          return a[1] - b[1];
        } else {
          return +a[0] - +b[0];
        }
      })
      .flat()
      .map(Number);

    return value;
  });

  return result;
}
