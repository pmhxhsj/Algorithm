const fs = require('fs');
let [n, ...input] = fs.readFileSync('../input.txt').toString().trim().split('\n');
input = input.filter((v) => isNaN(v));
const result = [];

for (let i = 0; i < input.length; i += 2) {
  let command = input[i].split('');
  let arr = JSON.parse(input[i + 1]);
  let isReverse = false;
  let isError = false;

  for (let j = 0; j < command.length; j++) {
    if (command[j] === 'R') {
      isReverse = !isReverse;
    } else {
      if (arr.length > 0) {
        if (isReverse) {
          arr.pop();
        } else {
          arr.shift();
        }
      } else {
        isError = true;
        break;
      }
    }
  }
  if (isError) {
    console.log('error');
  } else {
    if (isReverse) {
      console.log(JSON.stringify(arr.reverse()));
    } else {
      console.log(JSON.stringify(arr));
    }
  }
}
