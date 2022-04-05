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
  const [str, explosionStr] = input;
  console.log(solution(str, explosionStr));
});

function solution(str, str2) {
  const arr = [];

  Loop: for (let i = str.length - 1; i >= 0; i--) {
    arr.push(str[i]);

    if (arr.length >= str2.length && arr[arr.length - 1] === str2[0]) {
      for (let j = 1; j < str2.length; j++) {
        if (arr[arr.length - 1 - j] !== str2[j]) {
          continue Loop;
        }
      }

      for (let j = 0; j < str2.length; j++) {
        arr.pop();
      }
    }
  }

  if (arr.length === 0) {
    return 'FRULA';
  } else {
    return arr.reverse().join('');
  }
}
