const fs = require('fs');
let input = fs.readFileSync('../input.txt').toString().trim().split('\n');

input.shift();

const answer = [];

input.filter((value) => {
  let isVPSCount = 0;

  for (let i = 0; i < value.length; i++) {
    if (value[i] === '(') {
      isVPSCount++;
    } else {
      isVPSCount--;
    }

    if (isVPSCount < 0) {
      answer.push('NO');
      break;
    }
  }

  if (isVPSCount === 0) {
    answer.push('YES');
  } else if (isVPSCount > 0) {
    answer.push('NO');
  }
});

console.log(answer.join('\n'));
