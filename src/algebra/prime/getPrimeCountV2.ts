export default function getPrimeCount(n: number): number {
  let count = 0;
  for (let i = 2; i <= n; i++) {
    if (isPrime(i)) {
      count++;
    }
  }

  return count;
}

function isPrime(n: number): boolean {
  for (let d = 2; d < n; d++) {
    if (n % d === 0) {
      return false;
    }
  }
  return true;
}
