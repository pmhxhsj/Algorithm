const fs = require('fs');
let input = fs.readFileSync('../input.txt').toString().trim().split('\n');
input.shift();

let tableArr = [];
let timeArr = [];
const answer = [];

input = input.map((v) => v.split(' '));

console.log(input);

input.forEach((v) => {
  if (v[0] === 'order') {
    const [table, time] = [v[1], v[2]];
    tableArr.push(table);
    answer.push(tableArr.join(' '));
    timeArr.push([table, time]);
  } else if (v[0] === 'sort') {
    tableArr = timeArr
      .sort((a, b) => {
        if (a[1] === b[1]) {
          return a[0] - b[0];
        }
        return a[1] - b[1];
      })
      .map((v1) => v1[0]);

    answer.push(tableArr.join(' '));
  } else {
    const idx = tableArr.indexOf(v[1]);
    tableArr.splice(idx, 1);
    answer.push(tableArr.join(' '));
  }
  if (tableArr.length === 0) {
    answer.push('sleep');
    tableArr = [];
    timeArr = [];
  }
});

console.log(answer.filter((v) => v.length !== 0).join('\n'));
