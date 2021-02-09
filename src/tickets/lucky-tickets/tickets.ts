export function getLuckyCountV1(n: number): number {
  let count = 0;
  (function nextDigit(nr: number, sum1: number, sum2: number) {
    if (nr == 2 * n) {
      if (sum1 == sum2) {
        count++;
      }
      return;
    }
    for (let a = 0; a <= 9; a++)
      if (nr < n) {
        nextDigit(nr + 1, sum1 + a, sum2);
      } else {
        nextDigit(nr + 1, sum1, sum2 + a);
      }
  })(0, 0, 0);
  return count;
}

export function getLuckyCountV2(n: number): number {
  const sum_counts: number[] = new Array(9 * n + 1).fill(0);

  for (let i = 0; i < 10 ** n; i++) {
    const sum = getDigitsSum(i);

    sum_counts[sum] += 1;
  }

  let result = 0;
  for (const sum_count of sum_counts) {
    result += sum_count ** 2;
  }
  return result;
}

function getDigitsSum(n: number) {
  return n
    .toString()
    .split('')
    .reduce((res, d) => res + Number(d), 0);
}

export function getLuckyCountV3(n: number): bigint {
  let sumCounts: bigint[] = new Array(10).fill(1n);

  let nextN = 1;
  while (nextN < n) {
    nextN += 1;
    updateSumCounts(nextN);
  }

  function updateSumCounts(n: number) {
    let shift = 0;
    let index = 0;
    const nextSumCounts: bigint[] = new Array(9 * n + 1).fill(0n);
    while (index < 9 * n) {
      for (let i = 0; i < sumCounts.length; i++) {
        index = i + shift;
        nextSumCounts[index] += sumCounts[i];
      }
      shift += 1;
    }

    sumCounts = nextSumCounts;
  }

  return sumCounts.reduce((count, s) => (count += s ** 2n), 0n);
}
