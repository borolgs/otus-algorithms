import { runMultipleTests, runTests } from '../../common';
import { fibV1, fibV2, fibV3, fibV4 } from './fibonacci';

const run = (fn: (a: bigint) => bigint) => (input: string, output: string): boolean => {
  try {
    const result = fn(BigInt(input)).toString();
    return result === output;
  } catch (error) {
    return false;
  }
};

// runTests('4.Fibo', run(fibV4));

runMultipleTests(
  '4.Fibo',
  { description: 'Рекурсия', fn: run(fibV1), skipFrom: 7 },
  { description: 'Цикл', fn: run(fibV2), skipFrom: 12 },
  { description: 'Золотое сечение', fn: run((n) => BigInt(fibV3(Number(n)))), skipFrom: 8 },
  { description: 'Перемножение матриц', fn: run(fibV4), skipFrom: 12 },
);
