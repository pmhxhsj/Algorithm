function devide(arr) {
  let stack = [];
  let alpha = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
  for (let i = 0; i < arr.length - 1; i++) {
    if (alpha.includes(arr[i]) && alpha.includes(arr[i + 1])) stack.push((arr[i] + arr[i + 1]).toLowerCase());
  }
  return stack;
}

function number(arr) {
  let vArr = [];
  let result = arr.map((value, index) => {
    if (!vArr.includes(value)) {
      vArr.push(value);
      let count = 0;
      for (let i = 0; i < arr.length; i++) {
        if (value === arr[i]) {
          count++;
        }
      }
      return { str: value, count: count };
    } else return 0;
  });
  let result2 = [...result];
  result.forEach((a) => {
    if (a === 0) {
      let i = result2.indexOf(0);
      result2.splice(i, 1);
    }
  });
  return result2;
}

function solution(str1, str2) {
  const arr = devide(str1);
  const arr2 = devide(str2);
  const result = number(arr);
  const result2 = number(arr2);
  if (arr.length === 0 && arr2.length === 0) return 65536;

  let deno = [];
  let nume = [];
  for (let i = 0; i < result.length; i++) {
    if (!arr2.includes(result[i].str)) deno.push(result[i].count);
  }
  for (let i = 0; i < result2.length; i++) {
    if (!arr.includes(result2[i].str)) {
      deno.push(result2[i].count);
      continue;
    }
    for (let j = 0; j < result.length; j++) {
      if (result2[i].str === result[j].str) {
        let de = Math.max(result[j].count, result2[i].count);
        let num = Math.min(result[j].count, result2[i].count);
        deno.push(de);
        nume.push(num);
        break;
      }
    }
  }
  const numerator = nume.reduce((prev, cur) => (prev += cur), 0);
  const denominator = deno.reduce((prev, cur) => (prev += cur), 0);
  return parseInt((numerator / denominator) * 65536);
}
