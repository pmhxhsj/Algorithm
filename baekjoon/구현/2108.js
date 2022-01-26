const fs = require('fs');
let input = fs.readFileSync('../input.txt').toString().trim().split('\n');
input.shift();
input = input.map((v) => +v).sort((a, b) => a - b);

// 평균
console.log(Math.round(input.reduce((prev, cur) => prev + cur, 0) / input.length));
// 중앙값
console.log(input[(input.length - 1) / 2]);

let obj = {};

for (let i = 0; i < input.length; i++) {
  if (obj.hasOwnProperty(String(input[i]))) {
    obj[String(input[i])] += 1;
  } else {
    obj[String(input[i])] = 1;
  }
}

obj = Object.entries(obj).sort(([a, b], [c, d]) => {
  if (b === d) {
    return a - c;
  } else {
    return d - b;
  }
});
if (obj.length === 1) {
  console.log(obj[0][0]);
} else if (obj[0][1] === obj[1][1]) {
  console.log(obj[1][0]);
} else {
  console.log(obj[0][0]);
}
// 최빈값

// 범위
console.log(Math.abs(Math.max(...input) - Math.min(...input)));
