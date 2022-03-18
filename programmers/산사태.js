const { off } = require('process');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on('line', function (line) {
  input.push(line);
  if (input.length === +input[0].split(' ')[1] + 2) {
    rl.close();
  }
}).on('close', function () {
  const n = +input.shift().split(' ')[0];
  const q = input.shift().trim().split(' ');
  const query = input.map((v) => v.split(' '));

  const object = {};
  const startIdx = 1;

  for (let i = 1; i <= n; i++) {
    object[i] = {};
  }

  query.forEach((v) => {
    if (v[0] === 'I') {
      object[startIdx][[v[1]]] = +v[2];

      for (let k = 1; k <= q.length; k++) {
        value = Object.values(object[k]);

        if (value.length !== 0 && value.reduce((acc, cur) => acc + cur) > q[k - 1]) {
          const keys = Object.keys(object[k]);
          for (let i = 0; i < keys.length; i++) {
            object[k + 1][keys[i]] = object[k][keys[i]];
          }
          object[k] = {};
        }
      }
    } else if (v[0] === 'F') {
      const value = Object.values(object);

      console.log(validation(value, v[1]).join(' '));
    }
  });
});

function validation(value, num) {
  for (let i = 0; i < value.length; i++) {
    if (value[i][num]) {
      return [i + 1, value[i][num]];
    }
  }
  return ['none'];
}
