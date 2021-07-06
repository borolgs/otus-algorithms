import { findPaths, getFullPath, Graph } from './dijkstra';
describe('Djkstra', () => {
  let graph: Graph;
  beforeEach(() => {
    graph = {
      nodes: [
        [0, 1, 2], // 0 A
        [0, 3, 4], // 1 B
        [1, 3, 5, 6, 7], // 2 C
        [2, 6, 8], // 3 D
        [4, 6, 9, 10], // 4 E
        [7, 8, 9, 11], // 5 F
        [10, 11], // 6 G
      ],
      edges: [
        { v1: 0, v2: 1, weight: 2 }, // 0 AB
        { v1: 0, v2: 2, weight: 3 }, // 1 AC
        { v1: 0, v2: 3, weight: 6 }, // 2 AD
        { v1: 1, v2: 2, weight: 4 }, // 3 BC
        { v1: 1, v2: 4, weight: 9 }, // 4 BE
        { v1: 2, v2: 3, weight: 1 }, // 5 CD
        { v1: 2, v2: 4, weight: 7 }, // 6 CE
        { v1: 2, v2: 5, weight: 6 }, // 7 CF
        { v1: 3, v2: 5, weight: 4 }, // 8 DF
        { v1: 4, v2: 5, weight: 1 }, // 9 EF
        { v1: 4, v2: 6, weight: 5 }, // 10 EG
        { v1: 5, v2: 6, weight: 8 }, // 11 FG
      ],
    };
  });
  it('findPaths(G, A) should return shortest path length from A and previous node for each node of G', () => {
    const paths = findPaths(graph, 0);

    expect(paths).toEqual([
      { from: null, len: 0 }, // 0
      { from: 0, len: 2 }, // 1
      { from: 0, len: 3 }, // 2
      { from: 2, len: 4 }, // 3
      { from: 5, len: 9 }, // 4
      { from: 3, len: 8 }, // 5
      { from: 4, len: 14 }, // 6
    ]);

    expect(getFullPath(paths, 6)).toEqual([0, 2, 3, 5, 4, 6]);
  });
});
