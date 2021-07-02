
export function bfs(graph: number[][], start: number): number[] {
  const visited = [];
  const queue = [start];
  while (queue.length) {
    const vertex = queue.shift();
    if (!visited.includes(vertex)) {
      visited.push(vertex);
      const nextVertices = graph[vertex].filter(v => !visited.includes(v));
      queue.push(...nextVertices);
    }
  }

  return visited;
}

export function dfs(graph: number[][], start: number): number[] {
  const visited = [];
  const stack = [start];
  while (stack.length) {
    const vertex = stack.pop();
    if (!visited.includes(vertex)) {
      visited.push(vertex);
      const nextVertices = graph[vertex].filter(v => !visited.includes(v));
      nextVertices.reverse() // keep order
      stack.push(...nextVertices);
    }
  }

  return visited;
}

export function dfsRecursive(graph: number[][], start: number): number[] {
  const visited = [];
  (function dfs(vertex: number) {
    if(!visited.includes(vertex)) {
      visited.push(vertex)
      for (const n of graph[vertex]) {
        dfs(n);
      }
    }
  })(start);
  return visited;
}

export function reverse(graph: number[][]): number[][] {
  const newGraph: number[][] = graph.map(() => []);

  for (let i = 0; i < graph.length; i++) {
    const neighbours = graph[i];
    for (const vertex of neighbours) {
      newGraph[vertex].push(i);
    }
  }

  return newGraph;
}