export type AdjacencyList = number[][];
export type AdjacencyMatrix = number[][];

export function demicronTopoSearch(graph: AdjacencyList): number[][] {
  const matrix = createAdjacencyMatrix(graph);
  const indegrees = calcIndegrees(matrix);

  const verticesByLevel: number[][] = [];
  const visited: number[] = [];

  while (visited.length < matrix.length) {
    const levelVertices: number[] = [];

    for (let v = 0; v < matrix.length; v++) {
      if (visited.includes(v)) continue;

      if (indegrees[v] == 0) {
        levelVertices.push(v);
        visited.push(v);
      }
    }

    if (levelVertices.length < 1) {
      throw new Error('Graph is not directed acyclic graph');
    }

    verticesByLevel.push(levelVertices);

    for (const v of levelVertices) {
      const row = matrix[v];
      for (let i = 0; i < row.length; i++) {
        indegrees[i] -= row[i];
      }
    }
  }

  return verticesByLevel;
}

function createAdjacencyMatrix(graph: AdjacencyList): AdjacencyMatrix {
  return graph.map((neighbours) => {
    const row = new Array(graph.length).fill(0);
    for (const neighbour of neighbours) {
      row[neighbour] = 1;
    }
    return row;
  });
}

function calcIndegrees(matrix: AdjacencyMatrix): number[] {
  const sum = new Array(matrix.length).fill(0);
  for (const row of matrix) {
    for (let i = 0; i < row.length; i++) {
      sum[i] += row[i];
    }
  }
  return sum;
}
