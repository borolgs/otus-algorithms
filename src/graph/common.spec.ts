import {bfs, dfs, dfsRecursive, reverse} from './common';

describe("Common", () => {
  describe("Traverse", () => {
    let graph: number[][];
    
    beforeEach(() => {
      /**
         ┌─┐
       ┌─┤0├───┐
       │ └─┘   │
      ┌┴┐     ┌┴┐
      │2│   ┌─┤1├─┐
      └┬┘   │ └─┘ │
       │   ┌┴┐   ┌┴┐
       │   │3│   │4│
       │   └─┘   └┬┘
       │          │
       │ ┌─┐      │
       └─┤5├──────┘
         └─┘
      */
      graph = [
        [1, 2],
        [0, 3, 4],
        [0, 5],
        [1],
        [1, 5],
        [2, 4],
      ];
    })

    it("dfs() should return vertices in right order", () => {
      expect(dfs(graph, 0)).toEqual([ 0, 1, 3, 4, 5, 2 ]);
    })

    it("dfsRecursive() should return vertices in right order", () => {
      expect(dfsRecursive(graph, 0)).toEqual([ 0, 1, 3, 4, 5, 2 ]);
    })

    it("bfs() should return vertices in right order", () => {
      expect(bfs(graph, 0)).toEqual([ 0, 1, 2, 3, 4, 5 ]);
    })
  })

  describe("Flip edges", () => {
    let graph: number[][];

    beforeEach(() => {
      /**
      ┌───┐      ┌───┐      ┌───┐      ┌───┐
      │   ├──────►   │      │   ├──────►   │
      │ 0 │      │ 1 ├──────► 2 │      │ 3 │
      │   │   ┌──┤   │      │   ◄──────┤   │
      └─▲─┘   │  └─┬─┘      └─┬─┘      └▲─┬┘
        │     │    │          │         │ │
        │     │    │          │         │ │
      ┌─┴─┐   │  ┌─▼─┐      ┌─▼─┐      ┌┴─▼┐
      │   ◄───┘  │   ├──────►   │      │   │
      │ 4 │      │ 5 │      │ 6 ◄──────┤ 7 │
      │   ├──────►   ◄──────┤   │      │   │
      └───┘      └───┘      └───┘      └───┘
      */
      graph = [
        [1],
        [2, 4, 5],
        [3, 6],
        [2, 7],
        [0, 5],
        [6],
        [5],
        [3, 6]
      ];
    })

    it("reverse() should flip edges of graph", () => {
      expect(reverse(graph)).toEqual([
        [ 4 ],       [ 0 ],
        [ 1, 3 ],    [ 2, 7 ],
        [ 1 ],       [ 1, 4, 6 ],
        [ 2, 5, 7 ], [ 3 ]
      ]);
    })
  })
})
