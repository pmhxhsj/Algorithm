const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let input = [];
rl.on('line', function (line) {
  input.push(line);
  if (input.length === +input[0].split(' ')[0] + 1) {
    rl.close();
  }
}).on('close', function () {
  const [N, M] = input.shift().split(' ').map(Number);
  const commands = input.map((v) => v.split(' '));
  const answer = [];
  const result = [];
  commands.forEach((ele) => {
    if (ele[0] === 'order') {
      result.push([ele[1], ele[2]].map(Number));
      answer.push(result.map((v) => v[0]));
    } else if (ele[0] === 'sort') {
      if (result.length === 0) {
        answer.push('sleep');
      } else {
        result.sort((a, b) => {
          if (a[1] === b[1]) {
            return a[0] - b[0];
          } else {
            return a[1] - b[1];
          }
        });
        answer.push(result.map((v) => v[0]));
      }
    } else {
      const resultFilterArr = result.map((v) => v[0]);

      if (resultFilterArr.includes(+ele[1])) {
        const idx = resultFilterArr.indexOf(+ele[1]);
        result.splice(idx, 1);
      }

      if (result.length > 0) {
        answer.push(result.map((v) => v[0]));
      } else {
        answer.push('sleep');
      }
    }
  });
  console.log(answer.map((v) => (Array.isArray(v) ? v.join(' ') : v)).join('\n'));
});
