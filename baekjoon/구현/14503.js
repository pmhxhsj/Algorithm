const { SocketAddress } = require('net');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let input = [];
rl.on('line', function (line) {
  input.push(line);
  if (input.length === +input[0].split(' ')[0] + 2) {
    input = input.map((v) => v.split(' ').map(Number));
    rl.close();
  }
}).on('close', function () {
  const [x, y] = input.shift().map((v) => +v + 1);
  let [r, c, d] = input.shift().map(Number);
  let answer = 1;
  let count = 0;

  input[r][c] = 'v';

  while (r > 0 && c > 0 && r <= x && c <= y) {
    if (count === 4) {
      if (d === 0) {
        if (input[r + 1][c] === 1) {
          break;
        }
        r++;
      } else if (d === 1) {
        if (input[r][c - 1] === 1) {
          break;
        }
        c--;
      } else if (d === 2) {
        if (input[r - 1][c] === 1) {
          break;
        }
        r--;
      } else if (d === 3) {
        if (input[r][c + 1] === 1) {
          break;
        }
        c++;
      }

      count = 0;
    }
    if (d === 0) {
      if (input[r][c - 1] !== 0) {
        d = 3;
        count++;
      } else {
        d = 3;
        c--;
        input[r][c] = ++answer;
        count = 0;
      }
    } else if (d === 1) {
      if (input[r - 1][c] !== 0) {
        d = 0;
        count++;
      } else {
        d = 0;
        r--;
        input[r][c] = ++answer;
        count = 0;
      }
    } else if (d === 2) {
      if (input[r][c + 1] !== 0) {
        d = 1;
        count++;
      } else {
        d = 1;
        c++;
        input[r][c] = ++answer;
        count = 0;
      }
    } else if (d === 3) {
      if (input[r + 1][c] !== 0) {
        d = 2;
        count++;
      } else {
        d = 2;
        r++;
        input[r][c] = ++answer;
        count = 0;
      }
    }
  }

  console.log(answer);
});
