const fs = require('fs');
let input = fs.readFileSync('../input.txt').toString().trim().split('\n');
const n = +input.shift();

function MinHeap() {
  this.heap = [0];
  this.insert = (v) => {
    this.heap.push(v);
    let p = this.heap.length - 1;
    while (p > 1 && this.heap[Math.floor(p / 2)] > this.heap[p]) {
      let tmp = this.heap[Math.floor(p / 2)];
      this.heap[Math.floor(p / 2)] = this.heap[p];
      this.heap[p] = tmp;
      p = Math.floor(p / 2);
    }
  };
  this.getLength = () => {
    return this.heap.length;
  };
  this.delete = () => {
    if (this.heap.length - 1 < 1) {
      return 0;
    }
    let deletedItem = this.heap[1];
    this.heap[1] = this.heap[this.heap.length - 1];
    this.heap.pop();
    let p = 1;
    while (p * 2 < this.heap.length) {
      let min = this.heap[p * 2];
      let minP = p * 2;
      if (p * 2 + 1 < this.heap.length && min > this.heap[p * 2 + 1]) {
        min = this.heap[p * 2 + 1];
        minP = p * 2 + 1;
      }
      if (this.heap[p] < min) {
        break;
      }
      let tmp = this.heap[p];
      this.heap[p] = this.heap[minP];
      this.heap[minP] = tmp;
      p = minP;
    }
    return deletedItem;
  };
}

let list = new MinHeap();

for (let i = 0; i < n; i++) {
  let value = +input.shift();
  list.insert(value);
}

let answer = 0;

for (let i = 1; i < n; i++) {
  const a = list.delete();
  const b = list.delete();

  let sum = a + b;

  answer += sum;

  list.insert(sum);
}

console.log(answer);
