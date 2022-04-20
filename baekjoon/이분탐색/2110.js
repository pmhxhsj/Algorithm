const fs = require('fs');
const [num, ...input] = fs.readFileSync('../input.txt').toString().trim().split('\n');

const [house, router] = num.split(' ').map(Number);
const coordinate = input.map(Number).sort((a, b) => a - b);

console.log(house, router, coordinate);

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

// 1 2 4 8 9
