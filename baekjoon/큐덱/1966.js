const fs = require('fs');
const [n, ...input] = fs.readFileSync('dev/stdin').toString().trim().split('\n');
const result = input.map((v) => v.split(' ').map(Number));

let queue;
let answer = [];

while (result.length) {
  queue = [];

  const order = result.shift()[1];
  const paperArr = result.shift().map((v, i) => [v, i]);
  const len = paperArr.length;

  while (queue.length !== len) {
    if (paperArr[0][0] !== Math.max(...paperArr.map((v) => v[0]))) {
      const a = paperArr.shift();
      paperArr.push(a);
    } else {
      const a = paperArr.shift();
      queue.push(a);
    }
  }

  answer.push(queue.map((v) => v[1]).indexOf(order) + 1);
}

console.log(answer.join('\n'));
