import { PrioirityQueue } from '../data-structures/queue';

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

export type Path = {
  from: NodeIndex | null;
  len: number;
};

export function findPaths(graph: Graph, start: NodeIndex, end: NodeIndex | null = null): Path[] {
  const visited: NodeIndex[] = [];
  const paths: Path[] = graph.nodes.map(() => ({ from: null, len: Number.POSITIVE_INFINITY }));

  paths[start].len = 0;

  const candidates = new PrioirityQueue<NodeIndex>();
  candidates.enqueue(0, start);

  while (candidates.size) {
    const currentIndex = candidates.dequeue();

    const currentNode = graph.nodes[currentIndex];
    const sortedEdges = currentNode.map((e) => graph.edges[e]).sort((a, b) => a.weight - b.weight);
    for (const edge of sortedEdges) {
      const neighbourIndex = edge.v1 === currentIndex ? edge.v2 : edge.v1;
      if (visited.includes(neighbourIndex)) continue;

      const currentLen = paths[neighbourIndex].len;
      const newLen = edge.weight + paths[currentIndex].len;
      if (newLen < currentLen) {
        paths[neighbourIndex].len = newLen;
        paths[neighbourIndex].from = currentIndex;
      }

      candidates.enqueue(-paths[neighbourIndex].len, neighbourIndex);
    }

    visited.push(currentIndex);

    if (end && currentIndex === end) return paths;
  }

  return paths;
}

export function getFullPath(paths: Path[], v: NodeIndex): NodeIndex[] {
  const fullPath: NodeIndex[] = [];
  let next: NodeIndex | null = v;
  while (next != null) {
    fullPath.splice(0, 0, next);
    next = paths[next].from;
  }
  return fullPath;
}
