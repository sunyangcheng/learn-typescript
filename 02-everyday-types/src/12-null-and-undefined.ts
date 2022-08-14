let x: undefined = undefined;
let y: null = null;
// let z:string = undefined; // 不能将类型“undefined”分配给类型“string”。

function doSomething(x: string | null) {
  if (x === null) {
    // doSomething
  } else {
    console.log(x.toUpperCase());
  }
}

function liveDangerously(x?: number | null) {
  // no error
  console.log(x!.toFixed(2));
}

export {};