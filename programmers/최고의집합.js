function solution(n, s) {
  const mid = Math.floor(s / n);
  if (mid === 0) return [-1];

  const answer = new Array(n).fill(mid);

  for (let i = 0; i < s % n; i++) answer[answer.length - 1 - i]++;

  return answer;
}
