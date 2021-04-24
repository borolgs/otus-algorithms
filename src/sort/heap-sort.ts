export function protoHeapSort<T>(array: T[]): void {
  const swap = (a: number, b: number) => ([array[a], array[b]] = [array[b], array[a]]);

  const moveMaxToRoot = (root: number, size: number) => {
    for (let i = 1; i < size; i++) {
      if (array[i] > array[root]) {
        swap(root, i);
      }
    }
  };

  moveMaxToRoot(0, array.length);
  for (let j = array.length - 1; j >= 0; j--) {
    swap(0, j);
    moveMaxToRoot(0, j);
  }
}

export function heapSortV1<T>(array: T[]): void {
  const swap = (a: number, b: number) => ([array[a], array[b]] = [array[b], array[a]]);

  const moveMaxToRoot = (root: number, size: number) => {
    const L = root * 2 + 1;
    const R = L + 1;
    let X = root;
    if (L < size && array[L] > array[X]) {
      X = L;
    }
    if (R < size && array[R] > array[X]) {
      X = R;
    }
    if (X == root) {
      return;
    }
    swap(X, root);
    return moveMaxToRoot(X, size);
  };

  for (let root = array.length / 2 - 1; root >= 0; root--) {
    root = Math.floor(root);
    moveMaxToRoot(root, array.length);
  }

  for (let j = array.length - 1; j >= 0; j--) {
    swap(0, j);
    moveMaxToRoot(0, j);
  }
}

export function heapSort<T>(array: T[]): void {
  const swap = (a: number, b: number) => ([array[a], array[b]] = [array[b], array[a]]);

  const moveMaxToRoot = (root: number, size: number) => {
    let X: number;
    let L: number;
    let R: number;
    while (root < size) {
      L = root * 2 + 1;
      R = L + 1;
      X = root;

      if (L < size && array[L] > array[X]) {
        X = L;
      }
      if (R < size && array[R] > array[X]) {
        X = R;
      }
      if (X == root) {
        return;
      }
      swap(X, root);
      root = X;
    }
  };

  for (let root = array.length / 2 - 1; root >= 0; root--) {
    moveMaxToRoot(root, array.length);
  }

  for (let j = array.length - 1; j >= 0; j--) {
    swap(0, j);
    moveMaxToRoot(0, j);
  }
}
