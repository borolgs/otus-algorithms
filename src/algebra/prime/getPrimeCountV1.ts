export default function getPrimeCount(n: number): number {
  let count = 0;
  for (let i = 0; i <= n; i++) {
    if (isPrime(i)) {
      count++;
    }
  }
  return count;
}

function isPrime(n: number): boolean {
  let count = 0;
  for (let d = 0; d <= n; d++) {
    if (n % d === 0) {
      count++;
    }
  }
  return count == 2;
}
