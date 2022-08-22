function longest<T extends { length: number }>(x: T, y: T) {
  if (x.length > y.length) {
    return x;
  } else {
    return y;
  }
}

const longArr = longest([1,2,3], [4,5]); // "hello" 
const longStr = longest("hello", "ts"); // "ts" 
const longNum = longest(1, 2); // 类型“number”的参数不能赋给类型“{ length: number; }”的参数。

export {};