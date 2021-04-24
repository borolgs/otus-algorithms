export function selectionSort<T>(array: T[]): void {
  const swap = (a: number, b: number) => ([array[a], array[b]] = [array[b], array[a]]);

  for (let i = 0; i < array.length; i++) {
    let minIndex = i;
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[minIndex]) {
        minIndex = j;
      }
    }
    swap(i, minIndex);
  }
}
