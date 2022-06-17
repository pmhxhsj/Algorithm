const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");
const cases = input[0];
const arr = [];
const stack = [];
const answer = "";
for (var i = 0; i < cases; i++) {
  arr[i] = i + 1;
}
for (var j = 1; j <= cases; j++) {
  //4
  const count = 1;
  while (count <= cases && stack[stack.length - 1] != input[j]) {
    stack.push(arr.shift());
    answer += "+\n";
    count++;
  }
  if (stack[stack.length - 1] == input[j]) {
    stack.pop();
    answer += "-\n";
  } else {
    answer = "NO";
    break;
  }
}
console.log(answer);
