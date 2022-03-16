function solution(N, number) {
  const arr = Array.from(new Array(9), () => new Set());

  arr.forEach((v, idx) => v.add(Number(String(N).repeat(idx))));

  for (let i = 1; i <= 8; i++) {
    for (let j = 1; j < i; ++j) {
      for (let k of arr[j]) {
        for (let v of arr[i - j]) {
          arr[i].add(k + v);
          arr[i].add(k - v);
          arr[i].add(k * v);
          arr[i].add(k / v);
        }
      }
    }
    if (arr[i].has(number)) {
      return i;
    }
  }
  return -1;
}
