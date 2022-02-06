const fs = require('fs');
let input = fs
  .readFileSync('../input.txt')
  .toString()
  .trim()
  .split('\n')
  .map((v) => v.split(' '));
input.pop();

const getCombinations = function (arr, selectNum) {
  const results = [];
  if (selectNum === 1) return arr.map((value) => [value]);

  arr.forEach((fixed, index) => {
    const rest = arr.slice(index + 1);
    const combinations = getCombinations(rest, selectNum - 1);
    const attached = combinations.map((combination) => [fixed, ...combination]);
    results.push(...attached);
  });

  return results;
};

input = input.map((v) => v.slice(1));

for (let i = 0; i < input.length; i++) {
  getCombinations(input[i], 6).forEach((v) => {
    console.log(v.join(' '));
  });
  console.log('');
}
