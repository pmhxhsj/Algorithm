function solution(numbers, hand) {
  let answer = '';
  let left = [3, 0];
  let right = [3, 2];
  let leftLen;
  let rightLen;

  const usedHands = (left, right, num) => {
    leftLen = Math.abs(left[0] - num) + Math.abs(left[1] - 1);
    rightLen = Math.abs(right[0] - num) + Math.abs(right[1] - 1);

    if (leftLen < rightLen) {
      answer += 'L';
      left = [num, 1];
    } else if (leftLen > rightLen) {
      answer += 'R';
      right = [num, 1];
    } else {
      if (hand === 'left') {
        answer += 'L';
        left = [num, 1];
      } else {
        answer += 'R';
        right = [num, 1];
      }
    }
    return [left, right];
  };

  numbers.forEach((v, idx) => {
    switch (v) {
      case 1:
        left = [0, 0];
        answer += 'L';
        break;
      case 4:
        left = [1, 0];
        answer += 'L';
        break;
      case 7:
        left = [2, 0];
        answer += 'L';
        break;
      case 3:
        right = [0, 2];
        answer += 'R';
        break;
      case 6:
        right = [1, 2];
        answer += 'R';
        break;
      case 9:
        right = [2, 2];
        answer += 'R';
        break;
      case 2:
        [left, right] = usedHands(left, right, 0);
        break;
      case 5:
        [left, right] = usedHands(left, right, 1);
        break;
      case 8:
        [left, right] = usedHands(left, right, 2);
        break;
      case 0:
        [left, right] = usedHands(left, right, 3);
        break;
    }
  });

  return answer;
}
