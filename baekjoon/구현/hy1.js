// 유형: 단순 구현
// 유의할 것: 배열을 순회하며 K개보다 작은 인덱스 주의

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let input = [];
rl.on('line', function (line) {
  input.push(line);
  if (input.length === 2) {
    rl.close();
  }
}).on('close', function () {
  const [N, K] = input.shift().split(' ').map(Number);
  const machines = input.join('').split(' ').map(Number);

  const answer = machines.map((v, idx) => {
    const serialMachines = [...machines].splice(idx, K);

    if (serialMachines.length !== K) {
      return false;
    }
    return serialMachines.reduce((prev, cur) => prev + cur, 0);
  });

  console.log(Math.min(...answer.filter((v) => v !== false)));
});
