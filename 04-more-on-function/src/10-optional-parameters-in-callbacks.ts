function myForEach(arr: any[], cb: (args: any, index?: number) => void) {
  for (let i = 0; i < arr.length; i++) {
    cb(arr[i], i);
  }
}

myForEach([1, 2, 3], (x, i) => console.log(x, i)); // 1 0 2 1 3 2
myForEach([1, 2, 3], (x) => console.log(x)); // 1 2 3
myForEach([1, 2, 3], (x, i) => {
  console.log(i.toFixed());  // 对象可能为"未定义"
});
 

export {};