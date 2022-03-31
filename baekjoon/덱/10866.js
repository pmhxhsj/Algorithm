const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const N = Number(input[0]);
const commands = input.slice(1);

class Node {
  prev = null;
  next = null;
  constructor(value) {
    this.value = value;
  }
}
class Deque {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push_front(value) {
    const newNode = new Node(value);
    if (this.empty()) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
    }
    this.length += 1;
  }
  push_back(value) {
    const newNode = new Node(value);
    if (this.empty()) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length += 1;
  }
  pop_front() {
    if (this.empty()) return -1;
    const front = this.front();
    this.head = this.head.next;
    this.length -= 1;
    return front;
  }
  pop_back() {
    if (this.empty()) return -1;
    const back = this.back();
    this.tail = this.tail.prev;
    this.length -= 1;
    return back;
  }
  size() {
    return this.length;
  }
  empty() {
    return this.length === 0 ? 1 : 0;
  }
  front() {
    if (this.empty()) return -1;
    return this.head.value;
  }
  back() {
    if (this.empty()) return -1;
    return this.tail.value;
  }
}

const solution = (N, commands) => {
  const deque = new Deque();
  let answer = '';
  commands.forEach((c) => {
    const [command, value] = c.split(' ');
    if (command.includes('push')) deque[command](value);
    else answer += deque[command]() + '\n';
  });

  return answer;
};

console.log(solution(N, commands));
