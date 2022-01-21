const fs = require('fs');
let input = fs.readFileSync('../input.txt').toString().trim().split('\n');
input.shift();

let result = [];
for (let i = 0; i < input.length; i++) {
  if (input[i].length == 1) {
    result.push(input.slice(i + 1, i + Number(input[i]) + 1));
    i += Number(input[i]);
  }
}

result = result.map((v1) => v1.map((v2) => v2.split(' ').map((v) => +v)));
result.forEach((element) => element.sort((a, b) => a[0] - b[0]));
// 입력값 조정 끝 [ [[1,4],[2,3],[3,2],[4,1],[5,5]], [[1,4],[2,5]...]] 3차원 배열 형식

// 실제 문제풀이
result.forEach((v) => {
  let count = 1;
  let min = v[0][1];
  for (let i = 1; i < v.length; i++) {
    if (v[i][1] < min) {
      count++;
      min = Math.min(min, v[i][1]);
    }
  }

  console.log(count);
});
