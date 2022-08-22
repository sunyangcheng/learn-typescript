function minimumLength<T extends { length: number }>(
  obj: T,
  minimum: number
): T {
  if (obj.length < minimum) {
    return obj;
  } else {
    // 不能将类型“{ length: number; }”分配给类型“T”。
    // "{ length: number; }" 可赋给 "T" 类型的约束，但可以使用约束 "{ length: number; }" 的其他子类型实例化 "T"。
    return { length: number };
  }
}

// 假设上述成立，则下面的代码是可以编译通过的，然而实际不行，因为得到的arr不是一个数组，不存在slice方法。
const arr = minimumLength([1, 2, 3], 2);
console.log(arr.slice(0));