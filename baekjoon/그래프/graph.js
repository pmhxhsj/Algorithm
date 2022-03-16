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

  depthFirstRecursive(start) {
    const result = [];
    const visited = {};
    const node = this.node;

    (function dfs(vertex) {
      if (!vertex) return;
      visited[vertex] = true;
      result.push(vertex);

      node[vertex].forEach((v) => {
        if (!visited[v]) {
          return dfs(v);
        }
      });
    })(start);

    return result;
  }

  depthFisrtIterative(start) {
    const stack = [start];
    const result = [];
    const visited = {};
    let currentVisit;

    while (stack.length) {
      currentVisit = stack.pop();
      visited[currentVisit] = true;
      result.push(currentVisit);

      this.node[currentVisit].forEach((v) => {
        if (!visited[v]) {
          visited[v] = true;
          stack.push(v);
        }
      });
    }

    return result;
  }

  breadthFisrtIterative(start) {
    const queue = [start];
    const result = [];
    const visited = {};
    visited[start] = true;
    let currentVisit;

    while (queue.length) {
      currentVisit = queue.shift();
      result.push(currentVisit);

      this.node[currentVisit].forEach((v) => {
        if (!visited[v]) {
          visited[v] = true;
          queue.push(v);
        }
      });
    }
    return result;
  }
}

const graph = new Graph();

graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');
graph.addVertex('D');
graph.addVertex('E');
graph.addVertex('F');

graph.addEdge('A', 'B');
graph.addEdge('A', 'C');
graph.addEdge('B', 'D');
graph.addEdge('C', 'E');
graph.addEdge('D', 'E');
graph.addEdge('D', 'F');
graph.addEdge('E', 'F');

console.log(graph.depthFirstRecursive('A'));
console.log(graph.depthFisrtIterative('A'));
console.log(graph.breadthFisrtIterative('A'));
