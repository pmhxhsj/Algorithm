const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let input = [];
rl.on('line', function (line) {
  input.push(line);
  if (input.length === 3) {
    rl.close();
  }
}).on('close', function () {
  const [x1, y1, x2, y2, x3, y3] = input.reduce((prev, cur) => {
    for (let i of cur.split(' ')) {
      prev.push(+i);
    }
    return prev;
  }, []);

  const external1 = x1 * y2 + x2 * y3 + x3 * y1;
  const external2 = y1 * x2 + y2 * x3 + y3 * x1;

  if (external1 > external2) {
    console.log(1);
  } else if (external1 < external2) {
    console.log(-1);
  } else {
    console.log(0);
  }
});
