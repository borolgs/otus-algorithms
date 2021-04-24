export function bubleSortV1<T>(array: T[]): void {
  const swap = (a: number, b: number) => ([array[a], array[b]] = [array[b], array[a]]);
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length - 1; j++) {
      if (array[j] > array[j + 1]) {
        swap(j, j + 1);
      }
    }
  }
}

export function bubleSort<T>(array: T[]): void {
  const swap = (a: number, b: number) => ([array[a], array[b]] = [array[b], array[a]]);

  for (let i = 0; i < array.length; i++) {
    let sorted = true;

    for (let j = 0; j < array.length - 1; j++) {
      if (array[j] > array[j + 1]) {
        swap(j, j + 1);
        sorted = false;
      }

      if (sorted) return;
    }
  }
}
