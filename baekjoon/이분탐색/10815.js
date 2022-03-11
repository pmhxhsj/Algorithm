const fs = require('fs');
const input = fs.readFileSync('../input.txt').toString().trim().split('\n');

const binarySearch = (num) => {
  let left = 0;
  let right = sanggeunCard.length - 1;

  while (left <= right) {
    let middle = Math.floor((left + right) / 2);

    if (sanggeunCard[middle] < num) {
      left = middle + 1;
    } else if (sanggeunCard[middle] > num) {
      right = middle - 1;
    } else {
      return 1;
    }
  }
  return 0;
};

const sanggeunCard = input[1]
  .split(' ')
  .map(Number)
  .sort((a, b) => a - b);
const validationCard = input[3].split(' ').map(Number);

console.log(
  ...validationCard.map((v) => {
    return binarySearch(v);
  })
);
