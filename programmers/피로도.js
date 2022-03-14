function solution(k, dungeons) {
  const result = getPermutations(dungeons, dungeons.length);
  let maxDungeon = 0;

  result.forEach((v) => {
    let fatigue = k;
    let count = 0;
    for (let i = 0; i < v.length; i++) {
      if (fatigue >= v[i][0]) {
        count++;
        fatigue -= v[i][1];
      } else {
        break;
      }
    }
    maxDungeon = Math.max(maxDungeon, count);
  });

  return maxDungeon;
}

const getPermutations = function (arr, selectNumber) {
  const results = [];
  if (selectNumber === 1) return arr.map((el) => [el]);
  arr.forEach((fixed, index, origin) => {
    const rest = [...origin.slice(0, index), ...origin.slice(index + 1)];
    const permutations = getPermutations(rest, selectNumber - 1);
    const attached = permutations.map((el) => [fixed, ...el]);
    results.push(...attached);
  });

  return results;
};
