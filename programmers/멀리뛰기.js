function solution(n) {
  const ans = [1, 2, 3, 5, 8, 13];

  for (let i = 5; i < n; i++) {
    let k = ans[i] + (ans[i - 1] % 1234567);
    ans.push(k);
  }

  return ans[n - 1] % 1234567;
}
