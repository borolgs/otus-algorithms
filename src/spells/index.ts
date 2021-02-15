const harry = (x: number, y: number, words: string): boolean => eval(words);

const spells = [
  { n: 1, spell: 'x < y' },
  { n: 2, spell: 'x - y === 0' },
  { n: 3, spell: '24 - (x + y) === 0' },
  { n: 4, spell: 'x - 5 < 25 - y' },
  { n: 6, spell: '!(x >= 10 && y >= 10)' },
  { n: 7, spell: 'x > 15 && y >= 15' },
  { n: 8, spell: 'x === 0 || y === 0' },
  { n: 9, spell: 'Math.abs(x - y) > 10' },
  { n: 11, spell: '1 - x === 0 || 1 - y === 0 || x ===  23 || y === 23' },
  { n: 12, spell: 'Math.sqrt((0 - x) ** 2 + (0 - y) ** 2) < 20' },
  { n: 23, spell: 'x % 3 === 0 && y % 2 === 0' },
  { n: 25, spell: 'x % 6 === 0 || y % 6 === 0' },
];

function castSpell(spell = 'x % 6 === 0 || y % 6 === 0'): void {
  const size = 25;
  for (let x = 0; x < size; x++) {
    for (let y = 0; y < size; y++) {
      harry(x, y, spell) ? process.stdout.write('# ') : process.stdout.write('. ');
    }
    process.stdout.write('\n');
  }
}

function castAllSpells() {
  for (const [i, { n, spell }] of spells.entries()) {
    (function () {
      setTimeout(function () {
        console.clear();
        console.log(`Spell #${n}`);
        castSpell(spell);
      }, 1000 * i);
    })();
  }
}

castAllSpells();
