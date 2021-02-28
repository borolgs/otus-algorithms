import { runMultipleTests } from '../common';
import { heapSort } from './heap-sort';
import { insertionSort } from './insertion-sort';
import { selectionSort } from './selection-sort';
import { shellSort } from './shell-sort';

const run = (sort: (arr: number[]) => void) => (input: string, output: string): boolean => {
  const [_, arrayStr] = input.split(/\r?\n/);
  const array = arrayStr.split(' ').map((item) => Number(item));
  sort(array);
  const result = array.join(' ');
  return result === output;
};

const tests = [
  {
    description: 'selectionSort',
    fn: run(selectionSort),
    skipFrom: 6,
  },
  {
    description: 'insertionSort',
    fn: run(insertionSort),
    skipFrom: 6,
  },
  {
    description: 'shellSort (1.5)',
    fn: run((array) => shellSort(array, 1.5)),
  },
  {
    description: 'shellSort (2)',
    fn: run((array) => shellSort(array, 2)),
  },
  {
    description: 'shellSort (3)',
    fn: run((array) => shellSort(array, 3)),
  },
  {
    description: 'heapSort',
    fn: run(heapSort),
  },
];

const runRundomTests = () => {
  runMultipleTests('testFilesSearch/0.random', ...tests);
};

const runDigitsTests = () => {
  runMultipleTests('testFilesSearch/1.digits', ...tests);
};

const runSortedTests = () => {
  runMultipleTests('testFilesSearch/2.sorted', ...tests);
};

const runReversTests = () => {
  runMultipleTests('testFilesSearch/3.revers', ...tests);
};

switch (process.argv[2]) {
  case 'd':
    runDigitsTests();
    break;
  case 's':
    runSortedTests();
    break;
  case 'r':
    runReversTests();
    break;
  default:
    runRundomTests();
}
