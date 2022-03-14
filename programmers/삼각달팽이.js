function solution(n) {
  const triangleArr = [];

  for (let i = 1; i <= n; i++) {
    const arr = new Array(i).fill(null);
    triangleArr.push(arr);
  }

  let x = -1;
  let y = 0;
  let num = 0;

  while (n > 0) {
    for (let i = 0; i < n; i++) triangleArr[++x][y] = ++num;
    for (let i = 0; i < n - 1; i++) triangleArr[x][++y] = ++num;
    for (let i = 0; i < n - 2; i++) triangleArr[--x][--y] = ++num;
    n -= 3;
  }

  return triangleArr.reduce((acc, cur) => acc.concat(cur), []);
}
