const fs = require('fs');
const input = +fs.readFileSync('dev/stdin').toString().trim();
let bool;

function dfs(str) {
  if (bool) return;
  if (str.length === input) {
    console.log(str);
    bool = true;
    return;
  } else {
    for (let i = 1; i <= 3; i++) {
      const temp = str + `${i}`;
      if (temp.length <= input && isGoodSequence(temp)) {
        dfs(temp);
      }
    }
  }
}

function isGoodSequence(str) {
  const len = Math.floor(str.length / 2);

  for (let i = 1; i <= len; i++) {
    let a = str.length;
    let b = str.length - i;
    let c = str.length - i * 2;

    if (c >= 0 && str.substring(b, a) === str.substring(c, b)) {
      return false;
    }
  }
  return true;
}

dfs('1');
