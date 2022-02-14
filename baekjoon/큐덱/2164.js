const fs = require('fs');
const input = +fs.readFileSync('dev/stdin').toString().trim();

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this._size = 0;
  }

  add(value) {
    const newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
    }

    this.tail = newNode;
    this._size++;

    return newNode;
  }

  getHead() {
    return this.head.value;
  }

  removeHead() {
    this.head = this.head.next;
    this.head.prev = null;
    this._size--;
  }

  getSize() {
    return this._size;
  }
}

const arr = new LinkedList();

for (let i = 1; i <= input; i++) {
  arr.add(i);
}

while (arr.getSize() !== 1) {
  arr.removeHead();
  arr.add(arr.getHead());
  arr.removeHead();
}

console.log(arr.getHead());
