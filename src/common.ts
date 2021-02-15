import fs from 'fs';
import path from 'path';
import createTable from 'markdown-table';

class InOut {
  get input(): string {
    return fs.readFileSync(this.inputPath, { encoding: 'utf8' }).trim();
  }
  get output(): string {
    return fs.readFileSync(this.outputPath, { encoding: 'utf8' }).trim();
  }
  constructor(public number, private inputPath: string, private outputPath: string) {}
}

export function* getTestData(dir: string): Generator<InOut> {
  if (path.basename(dir) == dir) {
    dir = path.join(__dirname, '..', 'testFiles', dir);
  }

  const filenames = fs
    .readdirSync(dir)
    .filter((fn) => fn.startsWith('test.'))
    .sort((a, b) => Number(a.split('.')[1]) - Number(b.split('.')[1]));

  let count = 0;
  for (let i = 0; i < filenames.length; i += 2) {
    yield new InOut(count, path.join(dir, filenames[i]), path.join(dir, filenames[i + 1]));
    count += 1;
  }
}

export function runTests(dir: string, fn: (input: string, output: string) => boolean): void {
  for (const { number, input, output } of getTestData(dir)) {
    const start = new Date().getTime();

    const result = fn(input, output);

    const end = new Date().getTime() - start;

    console.info(`#${number} - ${result} - ${end}ms`);
  }
}

export type TableTest = {
  description: string;
  fn: (input: string, output: string) => boolean;
  skipFrom?: number;
};

export function runMultipleTests(dir: string, ...fns: TableTest[]): void {
  const inOuts: InOut[] = Array.from(getTestData(dir));
  const table = [['Реализация', ...inOuts.map(({ number }) => '#' + number)]];

  for (const { description, fn, skipFrom } of fns) {
    const row = [description];

    console.clear();
    process.stdout.write(`${description}... `);

    let skip = false;
    for (const { number, input, output } of inOuts) {
      process.stdout.write(`#${number} `);
      if ((skipFrom && number == skipFrom) || skip) {
        row.push('-');
        skip = true;
        continue;
      }
      const start = new Date().getTime();
      const result = fn(input, output);

      const end = new Date().getTime() - start;

      const cellValue = `${result ? '' : 'fail'} ${end}ms`;
      row.push(cellValue);
    }

    table.push(row);
  }
  console.clear();
  console.log(createTable(table));
}
