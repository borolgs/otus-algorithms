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
  if (n === 2) return true;
  if (n % 2 == 0) return false;
  const limit = Math.sqrt(n);
  for (let d = 3; d <= limit; d += 2) {
    if (n % d === 0) {
      return false;
    }
  }
  return true;
}
