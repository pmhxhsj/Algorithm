// 유형: 버블 정렬
// 유의사항: type도 같이 위치 바꿔주

const { SocketAddress } = require('net');
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
  const N = +input.shift();
  const [robotSize, robotType] = input.map((v) => v.split(' ').map(Number));
  const robotSizeSort = [...robotSize].sort((a, b) => a - b);

  let answer = 0;

  while (JSON.stringify(robotSize) !== JSON.stringify(robotSizeSort)) {
    for (let i = 1; i < N; i++) {
      if (robotSize[i - 1] > robotSize[i]) {
        [robotSize[i - 1], robotSize[i]] = [robotSize[i], robotSize[i - 1]];
        [robotType[i - 1], robotType[i]] = [robotType[i], robotType[i - 1]];

        if (robotType[i - 1] === robotType[i]) {
          answer++;
        }
      } else {
        continue;
      }
    }
  }

  console.log(answer);
});

// 4 3 2 1   0
// 3 4 2 1   1
// 3 2 4 1   2
// 3 2 1 4   3
// 2 3 1 4   4
// 2 1 3 4   5
// 1 2 3 4   6
