function solution(n, clockwise) {
  let arr = Array.from(Array(n), () => Array(n).fill(0));
  let depth = 0;
  let value = 1;

  if (clockwise === true) {
    while (true) {
      arr = clockwiseFormat(arr, depth, value);

      depth += 1;
      value = Math.max(...arr[depth]) + 1;

      const bool = countZero(arr);

      if (bool) {
        break;
      } else {
        replaceZeroWithElse(arr, depth);
      }
    }
  } else {
    while (true) {
      arr = antiClockwiseFormat(arr, depth, value);

      depth += 1;
      value = Math.max(...arr[depth]) + 1;

      const bool = countZero(arr);

      if (bool) {
        break;
      } else {
        replaceZeroWithElse(arr, depth);
      }
    }
  }

  return arr;
}

function clockwiseFormat(arr, depth, num) {
  let [memo, memo2] = [num, num];

  for (let i = depth; i < arr.length - 1 - depth; i++) {
    arr[depth][i] = memo;
    arr[i][arr.length - 1 - depth] = memo;
    memo++;
  }
  for (let i = arr.length - 1 - depth; i > depth; i--) {
    arr[arr.length - 1 - depth][i] = memo2;
    arr[i][depth] = memo2;
    memo2++;
  }

  return arr;
}

function antiClockwiseFormat(arr, depth, num) {
  let [memo, memo2] = [num, num];

  for (let i = arr.length - 1 - depth; i > depth; i--) {
    arr[depth][i] = memo;
    arr[i][arr.length - 1 - depth] = memo;
    memo++;
  }

  for (let i = depth; i < arr.length - 1 - depth; i++) {
    arr[i][depth] = memo2;
    arr[arr.length - 1 - depth][i] = memo2;
    memo2++;
  }
  return arr;
}

function countZero(arr) {
  let zero = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i].includes(0)) zero++;
  }

  if (zero === 1) {
    return false;
  } else if (zero === 0) {
    return true;
  }
}

function replaceZeroWithElse(arr, depth) {
  arr.forEach((v) => {
    if (v.includes(0)) {
      const idx = v.indexOf(0);
      v[idx] = Math.max(...arr[depth]) + 1;
    }
  });

  return arr;
}
