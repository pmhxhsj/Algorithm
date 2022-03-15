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
  let [R, C, time] = input.shift().split(' ').map(Number);
  let house = input.map((v) => v.split(' ').map(Number));
  const airCleanerIdx = house.map((v) => v[0]).indexOf(-1);

  let answer = 0;

  while (time) {
    house = diffusionDust(house); // 미세먼지 확장

    const antiClockwise = antiClockwiseRotation(house, airCleanerIdx); // 반시계 회전
    const clockwise = clockwiseRotation(house, airCleanerIdx); // 시계 회전

    house = antiClockwise.concat(clockwise); // 반시계 + 시계 배열 합치기

    answer = house.reduce((acc, cur) => acc + cur.reduce((a, c) => a + c), 0) + 2;

    time--;
  }

  console.log(answer);
});

function diffusionDust(arr) {
  const list = [];

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (arr[i][j] === 0 || arr[i][j] === -1) continue;

      const value = Math.floor(arr[i][j] / 5);
      let cnt = 0;

      if (i < arr.length - 1 && arr[i + 1][j] !== -1) {
        list.push([i + 1, j, value]);
        cnt++;
      }
      if (i > 0 && arr[i - 1][j] !== -1) {
        list.push([i - 1, j, value]);
        cnt++;
      }
      if (j < arr[i].length - 1 && arr[i][j + 1] !== -1) {
        list.push([i, j + 1, value]);
        cnt++;
      }
      if (j > 0 && arr[i][j - 1] !== -1) {
        list.push([i, j - 1, value]);
        cnt++;
      }

      arr[i][j] -= value * cnt;
    }
  }

  list.forEach((v) => {
    const [i, j, value] = v;

    arr[i][j] += value;
  });

  return arr;
}

function clockwiseRotation(arr, idx) {
  const clockwiseArr = [];

  for (let i = 0; i < arr.length; i++) {
    if (i > idx) {
      clockwiseArr.push(arr[i]);
    }
  }
  const value = [];

  value.push(...clockwiseArr[0].slice(1));
  for (let i = 1; i < clockwiseArr.length - 1; i++) value.push(clockwiseArr[i][clockwiseArr[1].length - 1]);
  value.push(...clockwiseArr[clockwiseArr.length - 1].reverse());
  clockwiseArr[clockwiseArr.length - 1].reverse();
  for (let i = clockwiseArr.length - 2; i > 0; i--) value.push(clockwiseArr[i][0]);

  value.pop();
  let x = 1;
  let y = 0;

  while (x < clockwiseArr[1].length - 1) {
    clockwiseArr[y][++x] = value.shift();
  }
  while (y < clockwiseArr.length - 1) {
    clockwiseArr[++y][x] = value.shift();
  }
  while (x > 0) {
    clockwiseArr[y][--x] = value.shift();
  }
  while (y > 0) {
    clockwiseArr[--y][x] = value.shift();
  }
  clockwiseArr[0][0] = -1;
  clockwiseArr[0][1] = 0;

  return clockwiseArr;
}

function antiClockwiseRotation(arr, idx) {
  const antiClockwiseArr = [];

  for (let i = 0; i < arr.length; i++) {
    if (i <= idx) {
      antiClockwiseArr.push(arr[i]);
    } else break;
  }

  const value = [];

  value.push(...antiClockwiseArr[idx].slice(1));
  for (let i = idx - 1; i > 0; i--) value.push(antiClockwiseArr[i][antiClockwiseArr[i].length - 1]);
  value.push(...antiClockwiseArr[0].reverse());
  antiClockwiseArr[0].reverse();
  for (let i = 1; i < idx; i++) value.push(antiClockwiseArr[i][0]);

  value.pop();
  let x = 1;
  let y = idx;

  while (x < antiClockwiseArr[1].length - 1) {
    antiClockwiseArr[y][++x] = value.shift();
  }
  while (y > 0) {
    antiClockwiseArr[--y][x] = value.shift();
  }
  while (x > 0) {
    antiClockwiseArr[y][--x] = value.shift();
  }
  while (y < idx) {
    antiClockwiseArr[++y][x] = value.shift();
  }

  antiClockwiseArr[idx][1] = 0;
  antiClockwiseArr[idx][0] = -1;

  return antiClockwiseArr;
}
