import { runMultipleTests, runTests } from '../../common';
import getPrimeCountEratosthenV1 from './getPrimeCountEratosthenV1';
import getPrimeCountEratosthenV2 from './getPrimeCountEratosthenV2';
import getPrimeCountV1 from './getPrimeCountV1';
import getPrimeCountV4 from './getPrimeCountV4';
import getPrimeCountV5 from './getPrimeCountV5';
import getPrimeCountV6 from './getPrimeCountV6';

const run = (fn: (a: number) => number) => (input: string, output: string): boolean => {
  const result = fn(Number(input)).toString();
  return result === output;
};

// runTests('5.Primes', run(getPrimeCountV1));

runMultipleTests(
  '5.Primes',
  { description: 'Перебор делителей O(n2)', fn: run(getPrimeCountV1), skipFrom: 9 },
  { description: 'Перебор делителей: + до корня O(n sqrt(n))', fn: run(getPrimeCountV4), skipFrom: 12 },
  { description: 'Перебор делителей: + только нечетные O(n sqrt(n))', fn: run(getPrimeCountV5), skipFrom: 12 },
  { description: 'Перебор делителей: + запоминание найденых O(n log n)', fn: run(getPrimeCountV6), skipFrom: 13 },
  { description: 'Решето Эратосфена O(n log log n)', fn: run(getPrimeCountEratosthenV1) },
  { description: 'Решето Эратосфена O(n)', fn: run(getPrimeCountEratosthenV2) },
);
