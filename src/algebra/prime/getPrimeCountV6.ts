let primes: number[];
let count = 0;

export default function getPrimeCount(n: number): number {
  if (n < 2) return 0;
  primes = [2];
  count = 1;
  for (let i = 3; i <= n; i += 2) {
    if (isPrime(i)) {
      primes.push(i);
      count++;
    }
  }

  return count;
}

function isPrime(n: number): boolean {
  const limit = Math.sqrt(n);

  for (let i = 0; primes[i] <= limit; i++) {
    if (n % primes[i] === 0) {
      return false;
    }
  }
  return true;
}
