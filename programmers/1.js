function solution(money, costs) {
  const arr = [500, 100, 50, 10, 5, 1];
  let answer = 0;

  const moneyArr = arr.map((v) => {
    const value = Math.floor(money / v) * v;
    money -= value;
    return value;
  });

  moneyArr.forEach((v) => {
    let min = Number.MAX_SAFE_INTEGER;
    let value = [...costs];
    if (v !== 0) {
      const format = formatMoney(value, v);

      format.forEach((ele) => {
        if (ele !== 0) {
          min = Math.min(ele, min);
        }
      });
      answer += min;
    }
  });

  return answer;
}

function formatMoney(arr, num) {
  arr[0] = arr[0] * num;
  num >= 5 ? (arr[1] = (arr[1] * num) / 5) : (arr[1] = 0);
  num >= 10 ? (arr[2] = (arr[2] * num) / 10) : (arr[2] = 0);
  num >= 50 ? (arr[3] = (arr[3] * num) / 50) : (arr[3] = 0);
  num >= 100 ? (arr[4] = (arr[4] * num) / 100) : (arr[4] = 0);
  num >= 500 ? (arr[5] = (arr[5] * num) / 500) : (arr[5] = 0);

  return arr;
}
