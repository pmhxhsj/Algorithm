function solution(s) {
  let count = 0;
  let result = s.split('');
  const sArr = result.map((v) => {
    const arr = [...result];
    result = [...arr.slice(1), v];
    return result;
  });

  sArr.forEach((v) => {
    if (validation(v)) {
      count++;
    }
  });

  return count;
}

function validation(arr) {
  const len = arr.length - 1;
  if (arr[0] === ']' || arr[0] === '}' || arr[0] === ')') return false;
  if (arr[len] === '[' || arr[len] === '{' || arr[len] === '(') return false;

  let [cnt1, cnt2, cnt3] = [0, 0, 0];

  const value = arr.join('');

  if (
    value.indexOf('[(]') !== -1 ||
    value.indexOf('([)') !== -1 ||
    value.indexOf('{[}') !== -1 ||
    value.indexOf('[{]') !== -1 ||
    value.indexOf('({)') !== -1 ||
    value.indexOf('{(}') !== -1
  )
    return false;

  for (let i = 0; i < arr.length; i++) {
    const v = arr[i];
    if (v === '[') cnt1++;
    else if (v === '{') cnt2++;
    else if (v === '(') cnt3++;
    else if (v === ']') cnt1--;
    else if (v === '}') cnt2--;
    else if (v === ')') cnt3--;

    if (cnt1 < 0 || cnt2 < 0 || cnt3 < 0) return false;
  }

  if (cnt1 > 0 || cnt2 > 0 || cnt3 > 0) return false;

  return true;
}
