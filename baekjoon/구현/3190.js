const fs = require('fs');

const Node = class {
  prev;
  next;
  position;

  constructor(position) {
    this.position = position;
  }
};
// dxdy: 오른쪽, 아래쪽, 왼쪽, 위쪽 순서
// command가 D일경우 currentDirection += 1;
// command가 L일경우 currentDirection -= 1;
const DIRECTION = [
  [0, 1],
  [1, 0],
  [0, -1],
  [-1, 0],
];

const changeCurrentDirection = (currentDirection, command) => {
  if (command === 'D') currentDirection = (currentDirection + 1) % 4;
  else if (command === 'L') currentDirection = currentDirection === 0 ? 3 : currentDirection - 1;

  return currentDirection;
};

const moveSnake = (snake, head, tail, currentDirection, apples, N) => {
  const [dx, dy] = DIRECTION[currentDirection];
  const [x, y] = head.position;
  const [nextX, nextY] = [x + dx, y + dy];

  // board 밖으로 나간 경우
  if (nextX < 1 || nextX > N || nextY < 1 || nextY > N) return [true];
  // 몸통에 부딪힌 경우
  if (snake.has(JSON.stringify([nextX, nextY]))) return [true];

  const newHead = new Node([nextX, nextY]);
  head.next = newHead;
  newHead.prev = head;
  head = newHead;
  snake.add(JSON.stringify(head.position));
  let appleIdx;
  if ((appleIdx = apples.findIndex(([ax, ay]) => ax === nextX && ay === nextY)) !== -1) {
    apples.splice(appleIdx, 1);
  } else {
    snake.delete(JSON.stringify(tail.position));
    tail.next.prev = null;
    tail = tail.next;
  }
  return [false, head, tail];
};

const solution = (N, K, apples, L, commands) => {
  const snake = new Set();
  let head, tail;
  head = tail = new Node([1, 1]);
  snake.add(JSON.stringify(head.position));
  let isGameOver = false;
  let time = 0;
  let currentDirection = 0;
  let commandIdx = 0;
  while (!isGameOver) {
    if (commands[commandIdx] && time === Number(commands[commandIdx][0])) {
      const command = commands[commandIdx][1];
      currentDirection = changeCurrentDirection(currentDirection, command);
      commandIdx++;
    }
    [isGameOver, head, tail] = moveSnake(snake, head, tail, currentDirection, apples, N);
    time++;
  }

  return time;
};

const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const N = Number(input[0]);
const K = Number(input[1]);
const apples = input.slice(2, 2 + K).map((v) => v.split(' ').map(Number));
const L = Number(input[2 + K]);
const commands = input.slice(3 + K).map((v) => v.split(' '));

console.log(solution(N, K, apples, L, commands));
