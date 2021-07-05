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

export function findMST(graph: Graph): Edge[] {
  const parents: NodeIndex[] = graph.nodes.map((_, i) => i);

  const sortedEdges = [...graph.edges].sort((a, b) => a.weight - b.weight);

  const mst: Edge[] = [];

  for (const edge of sortedEdges) {
    const { v1, v2 } = edge;
    const parent1 = find(v1);
    const parent2 = find(v2);
    if (parent1 !== parent2) {
      merge(v1, v2);
      mst.push(edge);
    }
  }

  return mst;

  function find(v: NodeIndex): NodeIndex {
    if (parents[v] === v) return v;
    const parent = find(parents[v]);
    setParent(v, parent);
    return parent;
  }

  function merge(u: NodeIndex, v: NodeIndex): void {
    const parentu = find(u);
    const parentv = find(v);
    if (parentu !== parentv) {
      // TODO join smaller to larger
      setParent(parentu, parentv);
    }
  }

  function setParent(v: NodeIndex, parent: NodeIndex): void {
    parents[v] = parent;
  }
}
