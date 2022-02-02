function solution(n, works) {
  if (works.reduce((prev, cur) => (prev += cur)) <= n) {
    return 0;
  }

  works.sort((a, b) => b - a);

  while (true) {
    let max = works[0];
    for (let i = 0; i < works.length; i++) {
      if (max === works[i]) {
        n--;
        works[i] -= 1;
        if (n === 0) break;
      }
    }
    works.sort((a, b) => b - a);

    if (n === 0) break;
  }
  return works.reduce((a, b) => (a += b ** 2), 0);
}
