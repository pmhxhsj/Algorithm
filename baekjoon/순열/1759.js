const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let input = [];
rl.on('line', function (line) {
  input.push(line);
  if (input.length === 2) {
    rl.close();
  }
}).on('close', function () {
  const collection = ['a', 'e', 'i', 'o', 'u'];
  const [L, C] = input[0].split(' ').map(Number);
  const solution = input[1].split(' ').sort();

  const combinationResult = getCombinations(solution, L);

  const answer = combinationResult
    .filter((v) => {
      const collectionLength = v.filter((ele) => collection.includes(ele)).length;
      const consonantLength = L - collectionLength;

      if (collectionLength >= 1 && consonantLength >= 2) {
        return v;
      }
    })
    .map((v) => v.join(''));

  console.log(answer.join('\n'));
});

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
