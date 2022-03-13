function solution(progresses, speeds) {
  var arr = [];
  var answer = [];
  var li = 0;
  var count = 0;
  while (progresses[li] < 100) {
    progresses[li] += speeds[li];
    count++;

    if (progresses[li] >= 100) {
      arr.push(count);
      count = 0;
      li++;
    }
  }
  while (arr.length > 0) {
    let first = arr[0];
    let count = arr.findIndex((num) => first < num);

    if (count !== -1) {
      answer.push(count);
      arr.splice(0, count);
    } else {
      answer.push(arr.length);
      arr.splice(0, arr.length);
    }
  }

  return answer;
}
