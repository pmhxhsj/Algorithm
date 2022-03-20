const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let input;
rl.on('line', function (line) {
  input = +line;
  rl.close();
}).on('close', function () {
  const arr = Array.from(Array(input), () => Array(input).fill(0));
  // arr배열 input X input 크기의 0 배열로 초기화

  let x = -1; // x좌표
  let y = 0; // y좌표
  let repeatNum = arr.length; // 반복 횟수 지정
  let count = 0; // 회전하면서 1부터 올라가는 값
  while (arr.filter((v) => v.includes(0)).length) {
    // arr배열에 0이 없으면 끝냄

    for (let i = 0; i < repeatNum; i++) arr[y][++x] = ++count; // -->
    for (let i = 0; i < repeatNum - 1; i++) arr[++y][x] = ++count; // 아래
    for (let i = 0; i < repeatNum - 1; i++) arr[y][--x] = ++count; // <--
    for (let i = 0; i < repeatNum - 2; i++) arr[--y][x] = ++count; // 위

    repeatNum -= 2; // 한 번 회전할 때 마다 2개씩 작아지므로 2씩 빼기
  }

  console.log(arr);
});
