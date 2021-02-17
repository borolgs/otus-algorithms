const FI = (1 + Math.sqrt(5)) / 2;

export function fibV1(n: bigint): bigint {
  if (n === 0n) return 0n;
  if (n == 1n || n === 2n) return 1n;

  return fibV1(n - 1n) + fibV1(n - 2n);
}

export function fibV2(n: bigint): bigint {
  let n0 = 0n;
  let n1 = 1n;
  let next: bigint;

  for (let i = 0n; i <= n; i++) {
    if (i <= 1) {
      next = i;
      continue;
    }

    next = n0 + n1;

    n0 = n1;
    n1 = next;
  }
  return next;
}

export function fibV3(n: number): number {
  let f = FI ** n / Math.sqrt(5) + 0.5;
  f = Math.floor(f);
  return f;
}

export function fibV4(n: bigint): bigint {
  if (n === 0n) return n;
  return mat2pow([1n, 1n, 1n, 0n], n - 1n)[0];
}

function mat2mult(a: bigint[], b: bigint[]): bigint[] {
  //prettier-ignore
  return [
    a[0] * b[0] + a[2] * b[1],
    a[1] * b[0] + a[3] * b[1],
    a[0] * b[2] + a[2] * b[3],
    a[1] * b[2] + a[3] * b[3],
  ];
}

function mat2pow(a: bigint[], m: bigint): bigint[] {
  if (m == 0n) {
    return [1n, 0n, 0n, 1n];
  } else if (m === 1n) {
    return a;
  } else {
    let b = a;
    let n = 2n;
    while (n <= m) {
      b = mat2mult(b, b);
      n = n * 2n;
    }
    const r = mat2pow(a, m - n / 2n);
    return mat2mult(b, r);
  }
}
