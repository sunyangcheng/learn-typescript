function combine<T>(x: T[], y: T[]): T[] {
  return x.concat(y);
}

const combined = combine([1, 2, 3], [4, 5]); // [1, 2, 3, 4, 5]
const combined2 = combine([1, 2, 3], ['4']); // 不能将类型”string“分配给类型”number“
const combined3 = combine(['1'], [2, 3, 4]); // 不能将类型”number“分配给类型”string“
const combined4 = combine<number | string>(['1'], [2, 3, 4]); // [1, 2, 3, 4]

export {};