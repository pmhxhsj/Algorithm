const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let input = [];
rl.on('line', function (line) {
  input.push(line);
  if (input.length === +input[0] + 1) {
    rl.close();
  }
}).on('close', function () {
  const [N, ...nums] = input.map(Number);

  nums.sort((a, b) => a - b);

  const avg = Math.round(nums.reduce((acc, cur) => acc + cur, 0) / nums.length);
  const median = nums[Math.floor(nums.length / 2)];

  const obj = {};

  for (let i = 0; i < N; i++) {
    if (!obj[nums[i]]) {
      obj[nums[i]] = 1;
    } else {
      obj[nums[i]] += 1;
    }
  }
  const modeArr = Object.entries(obj).sort((a, b) => b[1] - a[1]);
  const value = modeArr[0][1];

  console.log(avg === 0 ? +0 : avg);
  console.log(median);
  if (nums.length > 1 && modeArr[1][1] === value) {
    const maxModeArr = modeArr.filter((v) => v[1] === value);
    maxModeArr.sort((a, b) => +a[0] - +b[0]);
    console.log(+maxModeArr[1][0]);
  } else {
    console.log(+modeArr[0][0]);
  }
  if (nums.length > 1) {
    console.log(Math.abs(nums[nums.length - 1] - nums[0]));
  } else {
    console.log(0);
  }
});
