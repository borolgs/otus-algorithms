import { reverse } from "./common";

export function kosaraju(graph: number[][]): number[][] {
  const reversedGraph = reverse(graph);
  const queue: number[] = [];
  for (let v = 0; v < reversedGraph.length; v++) {
    dfs1(v);
  }

  const visited: number[] = []
  const components: number[][] = [];
  while(queue.length) {
    const v = queue.shift();
    dfs2(v);
  }

  return components;
 
  function dfs1(vertex: number): void {
      if (queue.includes(vertex)) return;
      queue.push(vertex);
      for (const neighbour of reversedGraph[vertex]) {
        dfs1(neighbour);
      }
  }

  function dfs2(vertex: number): void {
    const component: number[] = [];

    (function _dfs2(v: number) {
      if (visited.includes(v)) return;

      component.push(v);
      visited.push(v);
      for (const n of reversedGraph[v]) {
        _dfs2(n);
      }
    })(vertex);

    if (component.length) {
      components.push(component)
    }
  }
}