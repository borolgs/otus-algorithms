import { runTests } from '../common';

export type NextSteps = {
  bits: bigint;
  count: number;
};

export function getKingNextSteps(position: bigint): NextSteps {
  const kingBits = 1n << position;

  const notA = 0xfefefefefefefefen;
  const notH = 0x7f7f7f7f7f7f7f7fn;

  let bits =
    ((notA & kingBits) << 7n) | // top-left
    ((notA & kingBits) >> 1n) | // left
    ((notA & kingBits) >> 9n) | // bottom-left
    ((notH & kingBits) << 9n) | // top-right
    ((notH & kingBits) << 1n) | // right
    ((notH & kingBits) >> 7n) | // bottom-right
    (kingBits >> 8n) | // bottom
    (kingBits << 8n); // top

  bits = BigInt.asUintN(64, bits);

  return { bits, count: popcnt(bits) };
}

export function getRookNextSteps(position: bigint): NextSteps {
  const rowA = 0x101010101010101n;
  const row1 = 0xffn;

  const hookRow = position / 8n;
  const hookCol = position % 8n;

  let bits = (rowA << hookCol) ^ (row1 << (hookRow * 8n));
  bits = BigInt.asUintN(64, bits);

  return { bits, count: popcnt(bits) };
}

export function getBishopNextSteps(position: bigint): NextSteps {
  const notH8Corner = 0x103070f1f3f7fffn;
  const notH1Corner = 0x7f3f1f0f07030100n;
  const notA1Corner = 0xfefcf8f0e0c08000n;
  const notA8Corner = 0x80c0e0f0f8fcfeffn;
  const diagonalFromA = 0x8040201008040201n;
  const diagonalFromH = 0x102040810204080n;

  let bits1: bigint;
  let bits2: bigint;

  const col = position % 8n;
  let row: bigint;

  {
    row = position / 8n - 7n;
    if (row < 1n) row *= -1n;

    if (notA1Corner & (1n << position)) {
      bits1 = notA1Corner & (diagonalFromH << (col - row));
    } else {
      bits1 = notH8Corner & (diagonalFromH >> (row - col));
    }
  }

  // Hack
  if (position === 0n) bits1 = 1n;

  {
    row = position / 8n;

    if (notA8Corner & (1n << position)) {
      bits2 = notA8Corner & (diagonalFromA << (col - row));
    } else {
      bits2 = notH1Corner & (diagonalFromA >> (row - col));
    }
  }

  let bits = bits1 ^ bits2;

  bits = BigInt.asUintN(64, bits);

  return { bits, count: popcnt(bits) };
}

export function getQueenNextSteps(position: bigint): NextSteps {
  const rook = getRookNextSteps(position);
  const bishop = getBishopNextSteps(position);

  return { bits: rook.bits | bishop.bits, count: rook.count + bishop.count };
}

export function getKnightNextSteps(position: bigint): NextSteps {
  const knightBits = 1n << position;

  const notA = 0xfefefefefefefefen;
  const notAB = 0xfcfcfcfcfcfcfcfcn;
  const notH = 0x7f7f7f7f7f7f7f7fn;
  const notGH = 0x3f3f3f3f3f3f3f3fn;

  let bits =
    (notGH & ((knightBits << 6n) | (knightBits >> 10n))) |
    (notH & ((knightBits << 15n) | (knightBits >> 17n))) |
    (notA & ((knightBits << 17n) | (knightBits >> 15n))) |
    (notAB & ((knightBits << 10n) | (knightBits >> 6n)));

  bits = BigInt.asUintN(64, bits);

  return { bits, count: popcnt(bits) };
}

function popcnt(bits: bigint): number {
  let count = 0;
  while (bits) {
    count++;
    bits &= bits - 1n;
  }
  return count;
}

const run = (fn: (position: bigint) => NextSteps) => (input: string, output: string) => {
  const inputs = output.split(/\r?\n/);
  const expectedCount = Number(inputs[0]);
  const expectedBits = BigInt(inputs[1]);
  const position = BigInt(input);

  const { bits, count } = fn(position);
  return expectedBits === bits && expectedCount === count;
};

console.log('King:');
runTests('6.Bitboard-king', run(getKingNextSteps));
console.log('Knight:');
runTests('7.Bitboard-knight', run(getKnightNextSteps));
console.log('Rook');
runTests('8.Bitboard-rook', run(getRookNextSteps));
console.log('Bishop:');
runTests('9.Bitboard-bishop', run(getBishopNextSteps));
console.log('Queen:');
runTests('10.Bitboard-queen', run(getQueenNextSteps));
