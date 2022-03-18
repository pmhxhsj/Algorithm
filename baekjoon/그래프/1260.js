const { off } = require('process');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

class Graph {
  constructor() {
    this.node = {};
  }

  addVertex(vertex) {
    if (!this.node[vertex]) {
      this.node[vertex] = [];
    }
  }

  addEdge(v1, v2) {
    this.node[v1].push(v2);
    this.node[v2].push(v1);
  }

  depthFirstSearch(start) {
    const result = [];
    const visited = {};
    const node = this.node;

    function dfs(vertex) {
      if (!vertex) return;
      result.push(vertex);
      visited[vertex] = true;
      node[vertex]
        .sort((a, b) => a - b)
        .forEach((v) => {
          if (!visited[v]) {
            visited[v] = true;

            return dfs(v);
          }
        });
    }

    dfs(start);
    return result;
  }

  breadthFirstSearch(start) {
    const queue = [start];
    const result = [];
    const visited = {};

    visited[start] = true;

    while (queue.length) {
      const value = queue.shift();
      result.push(value);
      this.node[value]
        .sort((a, b) => a - b)
        .forEach((v) => {
          if (!visited[v]) {
            visited[v] = true;
            queue.push(v);
          }
        });
    }
    return result;
  }
}

let input = [];

rl.on('line', function (line) {
  input.push(line);
  if (input.length === +input[0].split(' ')[1] + 1) {
    rl.close();
  }
}).on('close', function () {
  const [num, ver, start] = input.shift().split(' ');
  const vertex = input.map((v) => v.split(' ').map(Number));

  const graph = new Graph();

  for (let i = 1; i <= +num; i++) {
    graph.addVertex(i);
  }

  vertex.sort((a, b) => a[0] - b[0]);

  vertex.forEach((v) => {
    graph.addEdge(v[0], v[1]);
  });

  console.log(graph.depthFirstSearch(start).join(' '));
  console.log(graph.breadthFirstSearch(start).join(' '));
});
