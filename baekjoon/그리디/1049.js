const input = require('fs').readFileSync('/dev/stdin').toString().trim().split(/\s/);
const n = +input[0];
const m = +input[1];
const arr = input.slice(2).map((v) => +v);
const pkgPrice = [];
const pcPrice = [];

for (let i = 0; i < m; i++) {
  pkgPrice.push(arr[2 * i]);
  pcPrice.push(arr[2 * i + 1]);
}

const pkgMin = pkgPrice.reduce((acc, v) => (acc < v ? acc : v), 1000);
const pcMin = pcPrice.reduce((acc, v) => (acc < v ? acc : v), 1000);
const pkgCount = Math.floor(n / 6);
const pcCount = n - 6 * pkgCount;
let cost;

if (pkgMin / 6 < pcMin) {
  cost = pkgCount * pkgMin + (pcCount * pcMin < pkgMin ? pcCount * pcMin : pkgMin);
} else {
  cost = n * pcMin;
}

console.log(cost);
