const binarySearch = (times, n) => {
  let left = 0;
  let right = n * times[times.length - 1];
  let middle, people;

  while (left <= right) {
    middle = Math.floor((left + right) / 2);

    people = times.reduce((prev, cur) => prev + Math.floor(middle / cur), 0);

    if (people >= n) {
      right = middle - 1;
    } else {
      left = middle + 1;
    }
  }

  return left;
};

function solution(n, times) {
  times = times.sort((a, b) => a - b);
  return binarySearch(times, n);
}
