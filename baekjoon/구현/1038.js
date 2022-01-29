const fs = require('fs');
let input = +fs.readFileSync('../input.txt').toString().trim();
const answer = [];
for (let i = 1; i <= 1023; i++) {
  let num = 0;
  let tmp_i = i;
  for (let idx = 9; idx >= 0; idx--) {
    if (tmp_i % 2 == 1) {
      num = 10 * num + idx;
    }
    tmp_i = Math.floor(tmp_i / 2);
  }
  answer.push(num);
}

if (input > 1022) {
  console.log(-1);
} else {
  console.log(answer.sort((a, b) => a - b)[input]);
}
