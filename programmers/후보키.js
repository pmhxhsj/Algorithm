function solution(relation) {
  relation.map((v) => {
    for (let i = 0; i < v.length; i++) {
      v[i] = i + v[i];
    }
    return v;
  }); // 열 번호 값 맨 앞에 붙여주기

  const answer = [];

  const uniqueValue = (arr) => {
    let uniqueKey = [];

    for (let i = 0; i < arr[0].length; i++) {
      let map = new Map();

      arr.forEach((ele) => {
        map.set(ele[i]);
      });
      if (map.size === arr.length) {
        // 겹치는 값이 없으면(유일성)

        const result = arr[0][i]
          .split(' ')
          .map((v) => v[0])
          .join('');

        answer.push(result);
        uniqueKey.push(i);
      }
    }

    uniqueKey.forEach((ele) => {
      arr.filter((v) => v.splice(ele, 1));
    }); // 열이 하나라 유일성을 만족하는 건 제거해줌

    return arr;
  };

  relation = uniqueValue(relation); // 초기 유일성 체크

  const arr = [];

  for (let j = 2; j <= relation[0].length; j++) {
    let obj = {};
    for (let i = 0; i < relation.length; i++) {
      const combi = getCombinations(relation[i], j);
      obj[i] = combi.map((v) => v.join(' '));
    }
    const objValue = Object.values(obj);
    uniqueValue(objValue);
  }

  return candidateKey(answer);
}

function getCombinations(arr, selectNum) {
  const results = [];
  if (selectNum === 1) return arr.map((value) => [value]);

  arr.forEach((fixed, index) => {
    const rest = arr.slice(index + 1);
    const combinations = getCombinations(rest, selectNum - 1);
    const attached = combinations.map((combination) => [fixed, ...combination]);
    results.push(...attached);
  });

  return results;
}

function candidateKey(arr) {
  arr = arr.map((v) => v.split(''));

  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      let count = 0;
      for (let k = 0; k < arr[i].length; k++) {
        if (arr[j].includes(arr[i][k])) {
          count++;
        }
        if (count === arr[i].length) {
          arr.splice(j, 1);
          j--;
          break;
        }
      }
    }
  }

  return arr.length;
}
