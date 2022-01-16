function VerificationSelfNum(n) {
  let number = n;

  while (n > 0) {
    number += n % 10;
    n = Math.floor(n / 10);
  }
  return number;
}
const maxSelfNum = 10000;
const selfNum = new Array(10000).fill(true);

for (let i = 1; i <= maxSelfNum; i++) {
  selfNum[VerificationSelfNum(i)] = false;

  if (selfNum[i]) {
    console.log(i);
  }
}
