function solution(n, t, m, p) {
  let changeNumber = [];
  let answer = '';
  let idx = p - 1;

  for (let i = 0; i < t * m; i++) {
    changeNumber.push(i.toString(n));
  }

  changeNumber = changeNumber.join('');

  while (answer.length < t) {
    answer += changeNumber[idx].toUpperCase();
    idx += m;
  }

  return answer;
}
