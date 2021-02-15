export default function getPrimeCount(n: number): number {
  const divs = new Int8Array(n + 1);

  let count = 0;

  for (let p = 2; p <= n; p++) {
    if (!divs[p]) {
      count++;
      for (let i = p ** 2; i <= n; i += p) {
        divs[i] = 1;
      }
    }
  }

  return count;
}
