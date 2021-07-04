import { demicronTopoSearch } from './demicron';

describe('Demicron Topo Search', () => {
  it('should return lists of vertices grouped by max path from vertices with zero indegree', () => {
    const graph = [
      [2, 12], // 0
      [12], // 1
      [], // 2
      [2], // 3
      [2, 8, 9], // 4
      [3, 10, 11, 12], // 5
      [10], // 6
      [1, 3, 5, 6], // 7
      [0, 13], // 8
      [0, 6, 11], // 9
      [2], // 10
      [], // 11
      [2], // 12
      [5], // 13
    ];

    const levels = demicronTopoSearch(graph);

    expect(levels).toEqual([
      [4, 7], // L0
      [1, 8, 9], // L1
      [0, 6, 13], // L2
      [5], // L3
      [3, 10, 11, 12], //L4
      [2], // L5
    ]);
  });
});
