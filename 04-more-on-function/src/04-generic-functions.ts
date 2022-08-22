function firstElement(arr: any[]) {
  return arr[0];
}

var a = 1;
a = firstElement([1, 2, 3]);
a = firstElement(['a', 'b', 'c']);
a = firstElement([true, false, true]);

function secondElement<T>(arr: T[]): T | undefined {
  return arr[1];
}

var b = 1;
b = secondElement([1, 2, 3]);
b = secondElement(['a', 'b', 'c']); // 不能将类型”string“分配给类型“number”
b = secondElement([]); // 不能将类型”undefined“分配给类型“number”


function map<Input, Output>(arr: Input[], fn: (x: Input) => Output): Output[] {
  return arr.map(fn);
}

const result = map(["1", "2", "3"], x => parseInt(x));  // [1, 2, 3]

export {};