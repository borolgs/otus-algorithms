import { findMST } from './boruvka';
describe('Boruvka', () => {
  it('findMST() should return minimal spanning tree in graph', () => {
    const graph = {
      nodes: [
        [0, 1], // 0 A
        [0, 2, 3, 4], // 1 B
        [2, 5], // 2 C
        [1, 3, 6, 7], // 3 D
        [4, 5, 6, 8, 9], // 4 E
        [7, 8, 10], // 5 F
        [9, 10], // 6 G
      ],
      edges: [
        { v1: 0, v2: 1, weight: 7 }, // 0 AB
        { v1: 0, v2: 3, weight: 5 }, // 1 AD
        { v1: 1, v2: 2, weight: 8 }, // 2 BC
        { v1: 1, v2: 3, weight: 9 }, // 3 BD
        { v1: 1, v2: 4, weight: 7 }, // 4 BE
        { v1: 2, v2: 4, weight: 5 }, // 5 CE
        { v1: 3, v2: 4, weight: 15 }, // 6 DE
        { v1: 3, v2: 5, weight: 6 }, // 7 DF
        { v1: 4, v2: 5, weight: 8 }, // 8 EF
        { v1: 4, v2: 6, weight: 9 }, // 9 EG
        { v1: 5, v2: 6, weight: 11 }, // 10 FG
      ],
    };

    const expected = [
      { v1: 0, v2: 3, weight: 5 }, // AD
      { v1: 2, v2: 4, weight: 5 }, // CE
      { v1: 3, v2: 5, weight: 6 }, // DF
      { v1: 0, v2: 1, weight: 7 }, // AB
      { v1: 1, v2: 4, weight: 7 }, // BE
      { v1: 4, v2: 6, weight: 9 }, // EG
    ];

    const mst = findMST(graph);
    expect(mst).toEqual(expected);
  });
});
