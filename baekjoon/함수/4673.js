const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
input = +input;

function answer(num) {
  let count = 0;

  if (num < 100) {
    return num;
  } else {
    for (let i = 100; i <= num; i++) {
      const hund = Math.floor(i / 100);
      const ten = Math.floor((i % 100) / 10);
      const one = i % 10;

      if (hund - ten === ten - one) {
        count++;
      }
    }
    return 99 + count;
  }
}

console.log(answer(input));
