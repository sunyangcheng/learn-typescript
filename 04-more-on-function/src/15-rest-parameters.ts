function multiply(n: number, ...m: number[]) {
  return m.map(x => x * n);
}

const result = multiply(2, 1, 2, 3); // [2, 4, 6]

