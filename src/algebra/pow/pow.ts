export function powV1(a: number, b: number): number {
  let result = 1;
  while (b) {
    b--;
    result *= a;
  }
  return result;
}

export function powV2(a: number, b: number): number {
  if (b === 0) return 1;
  let result = a;
  let pow2: number;
  for (let i = 2; i < b; i *= 2) {
    result *= result;
    pow2 = i;
  }
  for (let i = 0; i < b - pow2; i++) {
    result *= a;
  }
  return result;
}

export function powV3(a: number, b: number): number {
  let result = 1;
  let r = a;
  while (b > 1) {
    r *= r;
    b -= Math.ceil(b / 2);

    const isOdd = b % 2 != 0;
    if (isOdd) {
      result *= r;
    }
  }

  return result;
}
