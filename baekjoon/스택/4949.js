const fs = require('fs');
let input = fs.readFileSync('../input.txt').toString().trim().split('\n');
input.pop();

const answer = [];

input.filter((v) => {
  const bracketArr = [];

  for (let i = 0; i < v.length; i++) {
    switch (v[i]) {
      case '[':
        bracketArr.push('[');
        break;

      case ']':
        if (bracketArr.includes('[')) {
          let index = bracketArr.lastIndexOf('[');
          if (bracketArr[bracketArr.length - 1] !== '[') {
            bracketArr.push(']');
            break;
          }
          bracketArr.splice(index, 1);
        } else {
          bracketArr.push(']');
        }
        break;

      case '(':
        bracketArr.push('(');
        break;

      case ')':
        if (bracketArr.includes('(')) {
          let index = bracketArr.lastIndexOf('(');
          if (bracketArr[bracketArr.length - 1] !== '(') {
            bracketArr.push(')');
            break;
          }
          bracketArr.splice(index, 1);
        } else {
          bracketArr.push(')');
        }
        break;
    }
  }

  if (bracketArr.length === 0) {
    answer.push('yes');
  } else {
    answer.push('no');
  }
});

console.log(answer.join('\n'));
