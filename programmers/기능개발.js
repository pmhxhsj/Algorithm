function solution(progresses, speeds) {
  const result = progresses.map((v, idx) => {
    return Math.ceil((100 - v) / speeds[idx]);
  });

  let arr = [];
  let basicValue = result[0];
  let count = 1;

  for (let i = 1; i < result.length + 1; i++) {
    if (basicValue >= result[i]) {
      count++;
    } else {
      arr.push(count);
      basicValue = result[i];
      count = 1;
    }
  }

  return arr;
}
