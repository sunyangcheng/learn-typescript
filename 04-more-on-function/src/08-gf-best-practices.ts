// 可能的情况下，使用类型参数本身，而不对其进行约束
function firstElement1<T>(arr: T[]): T | undefined {
  return arr[0];
}

function firstElement2<T extends any[]>(arr: T): T[number] | undefined {
  return arr[0];
}

const a = firstElement1([1, 2, 3]);
const b = firstElement2([1, 2, 3]);

// 总是尽可能少的使用类型参数
function filter1<T>(arr: T[], fn: (x: T) => boolean): T[] {
  return arr.filter(fn);
}

function filter2<T, U extends (x: T) => boolean>(arr: T[], fn: U): T[] {
  return arr.filter(fn);
}

// 如果一个类型的参数只出现在一个地方，需重新考虑是否真的需要他
function greet1<T extends string>(str: T) {
  console.log(`hello ${str}`); 
}

function greet2(str: string) {
  console.log(`hello ${str}`);
}

