function solution(n) {
  let fibo = [1, 2];

  for (let i = 2; i < n; i++) {
    fibo.push((fibo[i - 2] % 1000000007) + (fibo[i - 1] % 1000000007));
  }

  return fibo[n - 1] % 1000000007;
}
