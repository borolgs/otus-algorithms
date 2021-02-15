import { runMultipleTests, runTests } from '../../common';
import { powV1, powV2, powV3 } from './pow';

const run = (fn: (a: number, b: number) => number) => (input: string, output: string): boolean => {
  const [base, exponent] = input.split(/\r?\n/);
  const result = fn(Number(base), Number(exponent)).toFixed(5);
  const expect = Number(output).toFixed(5);
  return result === expect;
};

// runTests('3.Power', run(powV3));

runMultipleTests(
  '3.Power',
  { description: 'Итеративный O(n)', fn: run(powV1), skipFrom: 9 },
  { description: 'Cтепень двойки с домножением O(n)', fn: run(powV2) },
  { description: 'Двоичное разложение показателя степени O(log n)', fn: run(powV3) },
);
