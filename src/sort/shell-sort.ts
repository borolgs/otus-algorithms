export function shellSort<T>(array: T[], f = 2): void {
  let gap = Math.floor(array.length / f);
  while (Math.floor(gap) > 0) {
    for (let i = 0; i + gap < array.length; i++) {
      let j = i + gap;
      const x = array[j];
      while (j - gap >= 0 && x < array[j - gap]) {
        array[j] = array[j - gap];
        j -= gap;
      }
      array[j] = x;
    }

    gap = Math.floor(gap / f);
  }
}
