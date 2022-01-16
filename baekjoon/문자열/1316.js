const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let inputCount = input.shift();

input.filter((v) => {
  const arr = [];
  let str = '';
  for (let i = 1; i < v.length; i++) {
    if (v[i - 1] === v[i]) {
      str += v[i - 1];
    } else {
      str += v[i - 1];
      arr.push(str);
      str = '';
    }
    if (i === v.length - 1) {
      str += v[i];
      arr.push(str);
    }
  }

  const arr2 = arr.map((v) => v[0]);

  const set = new Set(arr2);
  const unique = [...set];

  if (unique.length !== arr.length) {
    inputCount--;
  }
});

console.log(inputCount);
