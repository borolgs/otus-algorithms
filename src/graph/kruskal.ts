export type Graph = {
  nodes: Node[];
  edges: Edge[];
};

export type NodeIndex = number;
export type Node = EdgeIndex[];

export type EdgeIndex = number;
export type Edge = {
  v1: number;
  v2: number;
  weight: number;
};

export function findMST(graph: Graph): Graph {
  const mst: Graph = {
    nodes: graph.nodes.map(() => []),
    edges: [],
  };

  const sortedEdges = [...graph.edges].sort((a, b) => a.weight - b.weight);

  let edgeCount = 0;
  for (const edge of sortedEdges) {
    const { v1, v2 } = edge;
    const node1 = mst.nodes[v1];
    const node2 = mst.nodes[v2];

    if (!node1.length || !node2.length) {
      addEdge(edge);
      continue;
    }

    if (isNodesConnected(mst, v1, v2)) {
      continue;
    }

    addEdge(edge);
  }

  return mst;

  function addEdge(edge: Edge): void {
    mst.edges.push(edge);
    mst.nodes[edge.v1].push(edgeCount);
    mst.nodes[edge.v2].push(edgeCount);
    edgeCount++;
  }
}

export function isNodesConnected(graph: Graph, start: NodeIndex, find: NodeIndex): boolean {
  const visited = [];
  const stack = [start];

  while (stack.length) {
    const nodeIndex = stack.pop();
    if (visited.includes(nodeIndex)) continue;

    visited.push(nodeIndex);

    const node = graph.nodes[nodeIndex];
    for (const edgeIndex of node) {
      const edge: Edge = graph.edges[edgeIndex];

      const neighbour: NodeIndex = edge.v1 === nodeIndex ? edge.v2 : edge.v1;
      if (visited.includes(neighbour)) continue;

      if (neighbour === find) {
        return true;
      }

      stack.push(neighbour);
    }
  }

  return false;
}
