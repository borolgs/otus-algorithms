export default function getPrimeCount(n: number): number {
  const lp = new Uint32Array(n + 1);
  const pr: number[] = [];

  for (let i = 2; i <= n; i++) {
    if (lp[i] === 0) {
      pr.push(i);
      lp[i] = i;
    }

    for (const p of pr) {
      if (p <= lp[i] && p * i <= n) {
        lp[p * i] = p;
      } else {
        break;
      }
    }
  }

  return pr.length;
}
