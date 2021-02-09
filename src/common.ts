import fs from 'fs';
import path from 'path';

class InOut {
  get input(): string {
    return fs.readFileSync(this.inputPath, { encoding: 'utf8' }).trim();
  }
  get output(): string {
    return fs.readFileSync(this.outputPath, { encoding: 'utf8' }).trim();
  }
  constructor(public name, private inputPath: string, private outputPath: string) {}
}

export function* getTestData(dir: string): Generator<InOut> {
  if (path.basename(dir) == dir) {
    dir = path.join(__dirname, '..', 'testFiles', dir);
  }

  const filenames = fs
    .readdirSync(dir)
    .filter((fn) => fn.startsWith('test.'))
    .sort();

  let count = 0;
  for (let i = 0; i < filenames.length; i += 2) {
    yield new InOut('#' + count, path.join(dir, filenames[i]), path.join(dir, filenames[i + 1]));
    count += 1;
  }
}

export function runTests(dir: string, fn: (input: string, output: string) => boolean): void {
  for (const { name, input, output } of getTestData(dir)) {
    const start = new Date().getTime();

    const result = fn(input, output);

    const end = new Date().getTime() - start;

    console.info(`${name} - ${result} - ${end}ms`);
  }
}
