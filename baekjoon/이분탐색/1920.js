const fs = require('fs');
const input = fs.readFileSync('../input.txt').toString().trim().split('\n');

const binarySearch = (arr, num) => {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    let middle = Math.floor((start + end) / 2);
    if (arr[middle] < num) {
      start = middle + 1;
    } else if (arr[middle] > num) {
      end = middle - 1;
    } else {
      return 1;
    }
  }
  return 0;
};

const haveCard = input[1]
  .split(' ')
  .sort((a, b) => a - b)
  .map(Number);

const isCard = input[3].split(' ').map(Number);

const answer = isCard.map((v) => {
  return binarySearch(haveCard, v);
});

console.log(answer.join('\n'));
