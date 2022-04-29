const { off } = require('process');
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
  const [str, num] = [input[0].split(''), +input[1]];
  const firstPW = [];
  const secondPW = [];

  for (let i = 0; i < str.length; i++) {
    if (i < num) {
      firstPW.push(str[i]);
    }
    if (str.slice(i).length <= num) {
      secondPW.push(str[i]);
    }
  }

  const sameStartIdx = str.length - num;
  let count = 0;
  let idx = 0;

  if (2 * num > str.length) {
    for (let i = sameStartIdx; i < firstPW.length; i++) {
      if (firstPW[i] === secondPW[idx]) {
        str[i] = secondPW[i];
        count++;
      }
      idx++;
    }
  }
  const [first, second] = devide(str, num);
  console.log(first, second);
  const eachValueLen = first.filter((ele, idx) => ele !== second[idx]).length;

  console.log(count + eachValueLen);
});

function devide(arr, num) {
  const firstPW = [];
  const secondPW = [];
  for (let i = 0; i < arr.length; i++) {
    if (i < num) {
      firstPW.push(arr[i]);
    }
    if (arr.slice(i).length <= num) {
      secondPW.push(arr[i]);
    }
  }

  return [firstPW, secondPW];
}
