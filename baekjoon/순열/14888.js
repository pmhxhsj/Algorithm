const fs = require('fs');
let [n, ...input] = fs.readFileSync('dev/stdin').toString().trim().split('\n');
const [expression, sign] = input.map((v) => v.split(' ').map(Number));
const type = ['+', '-', '*', '/'];

const solution = () => {
  const signType = [];

  sign.forEach((ele, idx) => {
    if (ele !== 0) {
      for (let i = 0; i < ele; i++) {
        signType.push(type[idx]);
      }
    }
  });

  let max = Number.MIN_SAFE_INTEGER;
  let min = Number.MAX_SAFE_INTEGER;

  for (let ele of permutations(signType)) {
    const value = calculate(expression, ele);
    max = Math.max(max, value);
    min = Math.min(min, value);
  }

  if (max == '-0' || max == '+0') max = 0;
  if (min == '-0' || min == '+0') min = 0;

  console.log(`${max}\n${min}`);

  function* permutations(elements) {
    if (elements.length === 1) {
      yield elements;
    } else {
      const [first, ...rest] = elements;

      for (const a of permutations(rest)) {
        for (let i = 0; i < elements.length; i++) {
          const start = a.slice(0, i);
          const ended = a.slice(i);
          yield [...start, first, ...ended];
        }
      }
    }
  }

  function calculate(number, operate) {
    let idx = 0;
    let finalValue = number[0];
    for (let i = 1; i < number.length; i++) {
      const value = number[i];
      const oper = operate[idx++];

      if (oper === '+') {
        finalValue += value;
      } else if (oper === '-') {
        finalValue -= value;
      } else if (oper === '*') {
        finalValue *= value;
      } else {
        finalValue = parseInt(finalValue / value);
      }
    }

    return finalValue;
  }
};

solution();
